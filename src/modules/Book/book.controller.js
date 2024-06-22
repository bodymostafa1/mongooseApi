import { Book } from "../../../database/models/book.model.js"

const addBook = async (req,res)=>{
let newBook = await Book.create(req.body)
res.json({"message":"success",createdBook:newBook})
}
const findBooks = async (req,res)=>{
    let { page = "1", limit = "10" } = req.query;
    page = parseInt(page, 10);
    limit = parseInt(limit, 10);
    const skip = (page - 1) * limit;
    let allBooks = await Book.find().skip(skip).limit(limit);
    const totalBooks = await Book.countDocuments();
    res.json({
      message: "success",
      books: allBooks,
      totalBooks: totalBooks,
      totalPages: Math.ceil(totalBooks / limit),
      currentPage: page
    });
} 
const findBook = async (req,res)=>{
        let newBook = await Book.findById(req.params.id)
        res.json({"message":"success",FoundBook:newBook})
}
const updateBook = async (req,res)=>{
    let updatedBook = await Book.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.json({"message":"success",Book:updatedBook})
}
const deleteBook = async (req,res)=>{
    await Book.findByIdAndDelete(req.params.id)
    res.json({"message":"deleted successfully"})
}
export{
    addBook,
    findBooks,
    findBook,
    updateBook,
    deleteBook
}