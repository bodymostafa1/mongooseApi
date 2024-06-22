import { Router } from "express";
import { addAuthor, deleteAuthor, findAuthor, findAuthors, updateAuthor } from "./author.controller.js";

const authorRouter = Router()
authorRouter.post("/author",addAuthor)
authorRouter.get("/author",findAuthors)
authorRouter.get("/author/:id",findAuthor)
authorRouter.put("/author/:id",updateAuthor)
authorRouter.delete("/author/:id",deleteAuthor)
export default authorRouter