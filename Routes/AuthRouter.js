const express=require("express")
const bcrypt=require("bcrypt")
const userAuth=require("../Authentication.js")
const client=require("../redis.js")
const cookieparser=require("cookie-parser")
const user=require("../models/users")
const jwt=require("jsonwebtoken")
const validateUser=require("../uservalidation.js")
const authRouter=express.Router()
authRouter.post("/register",async(req,res)=>{
  try {
    validateUser(req.body)
    req.body.password=await bcrypt.hash(req.body.password,10)
     await user.create(req.body)
      return res.status(201).json({
      message: "User registered successfully"
    })
  } catch (err){
    res.send(err.message)
  }
})
  authRouter.post("/login", async (req, res) => {
  try {
    const people = await user.findOne({email:req.body.email});

    if (!people) {
      return res.status(404).send("User not found");
    }
    if (req.body.email !== people.email) {
      return res.status(401).send("Invalid email");
    }
    const isAllowed = await people.verifyPassword(req.body.password);
    if (!isAllowed) {
      return res.status(401).send("Invalid password");
    } 
    //jwt token
   const token=people.getJWT()
   res.cookie("token",token)
   console.log(token)
    res.send("Login successfully"); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error"); 
  }
});
authRouter.post("/logout",userAuth,async (req, res) => {
  try {
  
    const { token } = req.cookies;
    console.log("Token from cookie:", token);

    const payload = jwt.decode(token);
    console.log("Decoded payload:", payload);

    await client.set(`token:${token}`, "Blocked");
    await client.expireAt(`token:${token}`,payload.exp)

    res.clearCookie("token");

    res.send("Logged out successfully");
  } catch (error) {
    console.error("Logout error:", error);
  }
});
module.exports=authRouter    
