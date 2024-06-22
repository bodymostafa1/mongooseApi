import { ObjectId } from "bson";
import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name : {
        type:String,
        required:true,
        lowerCase:true
    } ,
    bio : {
        type:String,
    } ,
    birthDate : {
        type:Date,
    } ,
    books:{type:[mongoose.Types.ObjectId],
        ref:"Book",
        default:null
    }
},{
    versionKey:false
})
export const Author =mongoose.model("Author",schema)
