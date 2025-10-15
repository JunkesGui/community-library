import booksControllers from "../controller/books.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { validate } from "../middlewares/validation.middlewares.js";
import { validateBookId } from "../middlewares/validation.middlewares.js";
import { bookIdSchema, bookSchema } from "../schema/book.schema.js";

const router = Router()

router.use(authMiddleware)

//POST
router.post("/books", validate(bookSchema), authMiddleware, booksControllers.createBook);

//GET
router.get("/books", booksControllers.findAllBooks);
router.get("/books/:id", validateBookId(bookIdSchema), booksControllers.findBookByID);

//PATCH
router.patch("/books/:id", validate(bookSchema), validateBookId(bookIdSchema), booksControllers.updateBook);

//DELETE
router.delete("/books/:id", validateBookId(bookIdSchema), booksControllers.deleteBook);


export default router