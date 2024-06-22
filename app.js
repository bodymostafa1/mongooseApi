import dbConnection from "./database/dbConnection.js";
import express from "express"
import authorRouter from "./src/modules/Author/author.routes.js";
import bookRouter from "./src/modules/Book/book.routes.js";
const app = express()
const port = 3000
app.use(express.json())
app.use(authorRouter)
app.use(bookRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))