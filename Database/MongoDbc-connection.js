const mongoose =require('mongoose')
const {Schema}=mongoose
async function main(){
    //Database connection
    await mongoose.connect(process.env.DB_CONNECT_KEY)
}
main()
//then(console.log).catch(console.error)
module.exports=main

