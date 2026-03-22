const jwt=require('jsonwebtoken')
const user=require("./models/users")
const client=require("./redis.js")
const userAuth=async(req,res,next)=>{
    try {
          const{token}=req.cookies;
    if(!token){
      throw new Error("token not exist")
    }
   const payload= jwt.verify(req.cookies.token,"Rohit@13412$")
   const{_id}=payload
   if(!_id){
    throw new Error("ID is missing")
   }
  const ans=await user.findById(payload._id)
  if(!ans){
    throw new Error("User not exists")
  }
   const isBlocked=await client.exists(`token:${token}`)
   if(isBlocked)
    throw new Error("Invalid token")
  req.result=ans
  next()      
    } catch (error) {
         res.status(401).send(error.message)
  }  
    }
module.exports=userAuth;
