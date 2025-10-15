import booksControllers from "../controller/books.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { validate } from "../middlewares/validation.middlewares.js";
import { bookSchema } from "../schema/book.schema.js";

const router = Router()

router.use(authMiddleware)

//POST
router.post("/books", validate(bookSchema) ,booksControllers.createBook);

//GET
router.get("/books", booksControllers.findAllBooks);

export default router