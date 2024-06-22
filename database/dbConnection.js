import mongoose from "mongoose";
let dbConnection =  await mongoose.connect('mongodb://127.0.0.1:27017/').then(()=>{
    console.log("database connected successfully")
})
export default dbConnection