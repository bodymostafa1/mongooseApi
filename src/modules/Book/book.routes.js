import { Router } from "express";
import { addBook, deleteBook, findBook, findBooks, updateBook } from "./book.controller.js";

const bookRouter = Router()
bookRouter.post("/book",addBook)
bookRouter.get("/book",findBooks)
bookRouter.get("/book/:id",findBook)
bookRouter.put("/book/:id",updateBook)
bookRouter.delete("/book/:id",deleteBook)
export default bookRouter