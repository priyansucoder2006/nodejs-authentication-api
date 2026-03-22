const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { Schema }=mongoose
const userSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
     lastName:{
        type:String
    },
    age:{
        type:Number,
        min:14,
        max:70,
        requuired:true
    },
    gender:{
        type:String,
        required:true,
        validate(value){
        if(!["male","female","others",].includes(value))
            throw new Error("Invallid Gender")
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true
    },
    password:{
        type: String,
        required:true
  
    },
    photo:{
        type:String,
        default:"anonymous"
    }
},{timestamps:true})
userSchema.methods.getJWT=function(){
   const ans= jwt.sign({_id:this._id,email:this.email},process.env.SECRET_KEY,{expiresIn:1800})
   return ans;
}
userSchema.methods.verifyPassword=async function(UserPassword){
   const ans= await bcrypt.compare(UserPassword, this.password);
    return ans
}
const user=mongoose.model("user",userSchema)
module.exports=user
