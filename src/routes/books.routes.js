import booksControllers from "../controller/books.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { validate } from "../middlewares/validation.middlewares.js";
import { validateBookId } from "../middlewares/validation.middlewares.js";
import { bookIdSchema, bookSchema } from "../schema/book.schema.js";

const router = Router()

router.use(authMiddleware)

//POST
router.post("/", validate(bookSchema), authMiddleware, booksControllers.createBook);

//GET SEARCH
router.get("/search", booksControllers.searchBook);
//GET
router.get("/", booksControllers.findAllBooks);
router.get("/:id", validateBookId(bookIdSchema), booksControllers.findBookByID);


//PATCH
router.patch("/:id", validate(bookSchema), validateBookId(bookIdSchema), booksControllers.updateBook);

//DELETE
router.delete("/:id", validateBookId(bookIdSchema), booksControllers.deleteBook);


export default router;