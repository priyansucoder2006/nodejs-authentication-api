const validator =require("validator")

function validateUser(data){
     const mandatoryfields=["firstName","email","age","password"]
   const isAllowed=mandatoryfields.every((keys)=>Object.keys(data).includes(keys))
   if(!isAllowed){
    throw new Error("Felds are missing")
   }
   if(!validator.isEmail(data.email)){
    throw new Error("Invalid Empty")
   }
   if(!validator.isStrongPassword(data.password)){
    throw new Error("weak password")
   }
   if(!(data.firstName.length>=3&& data.firstName.length<=20)){
    throw new Error("please enter min of 3 characters and maximum of 20 characters")
   }
}
module.exports=validateUser
