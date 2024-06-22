import { Author } from "../../../database/models/Author.model.js"

const addAuthor = async (req,res)=>{
let newAuthor = await Author.create(req.body)
res.json({"message":"success",createdAuthor:newAuthor})
}
const findAuthors = async (req,res)=>{
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;
    let allAuthors = await Author.find().populate("books").skip(skip).limit(limit);
    const totalAuthors = await Author.countDocuments();
    res.json({
      "message": "success",
      "authors": allAuthors,
      "totalAuthors": totalAuthors,
      "totalPages": Math.ceil(totalAuthors / limit),
      "currentPage": page
    });
} 
const findAuthor = async (req,res)=>{
        let newAuthor = await Author.findById(req.params.id).populate("books")
        res.json({"message":"success",FoundAuthor:newAuthor})
}
const updateAuthor = async (req,res)=>{
    let updatedAuthor = await Author.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.json({"message":"success",Author:updatedAuthor})
}
const deleteAuthor = async (req,res)=>{
    await Author.findByIdAndDelete(req.params.id)
    res.json({"message":"deleted successfully"})
}
export{
    addAuthor,
    findAuthors,
    findAuthor,
    updateAuthor,
    deleteAuthor
}