import booksServices from "../service/books.services.js";

async function createBook(req, res) {
    const newBook = req.body;
    const userId = req.userId;

    try {
        const createdBook = await booksServices.createBook(newBook, userId);
        res.status(201).send(createdBook);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

async function findAllBooks(req, res) {
    try {
        const books = await booksServices.findAllBooks();
        res.send(books)
    } catch (err) {
        res.status(404).send({message: err.message});  
    }
    
}


export default{
    createBook,
    findAllBooks
}