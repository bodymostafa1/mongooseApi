import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
    title : {
        type:String,
        required:true,
        lowerCase:true
    } ,
    content : {
        type:String,
        required:true,
    } ,
    author : {
        type:mongoose.Types.ObjectId,
        ref:"Author",
        required:true,
    } ,
    publishedDate:{
        type:Date
    }
},{
    versionKey:false
})
export const Book = mongoose.model("Book",schema)