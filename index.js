require('dotenv').config()
const express = require("express");
const main=require("./database")
const bcrypt=require("bcrypt")
const app = express();
const user=require("./models/users")
const cookieparser=require("cookie-parser")
const validateUser=require("./uservalidation.js")
const userAuth=require("./Authentication.js")
const jwt=require("jsonwebtoken")
const authRouter=require("./Routes/auth.js")
const userRouter=require("./Routes/userRouter.js")
const rateLimiter=require("./rateLimiter.js")
const client=require("./redis.js")
app.use(express.json());
app.use(cookieparser())
app.use(rateLimiter)
app.use("/auth",authRouter)
app.use("/user",userRouter)

const initializeConnection=async()=>{
  try{
    await client.connect()
    console.log("Connected to Redis")
    await main()
    console.log("Connected to MongoDb")
     app.listen(process.env.PORT,() =>{
  console.log("Listening at port 4000");
});
  }catch(e){
    console.log(e.message)
  }
}
initializeConnection()

