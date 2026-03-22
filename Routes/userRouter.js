const express=require("express")
const userAuth=require("../Authentication.js")
const userRouter=express.Router()
const user=require("../models/users")
userRouter.get("/info",userAuth,async(req,res)=>{
  try{
    res.send(req.result)
  }catch(e){
    res.send(e.message)
  }
})
userRouter.delete("/user/:id",userAuth,async(req,res)=>{
  try {await user.findByIdAndDelete(req.params.id)
  res.send("deleted")
  } catch (error) {
    res.send('error')
  }
})
userRouter.patch("/info/:id",userAuth,async(req,res)=>{
  try {
     const{_id,...update}=req.body
  await user.findByIdAndUpdate(_id,update,{"runValidators":true})
  res.send("User information updated succesfully")
  } catch (error) {
    res.send(error)
  }
})
module.exports=userRouter
