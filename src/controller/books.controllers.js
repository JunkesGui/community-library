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

async function findBookByID(req, res){
    const bookId = req.params.id;

    try {
        const book =  await booksServices.findBookByID(bookId);
        res.send(book);
    } catch (err) {
        return res.status(400).send({message: err.message})        
    }
}

async function updateBook(req, res){
    const updatedBook = req.body;
    const bookId = req.params.id;
    const userId = req.userId;

    try {
        const response = await booksServices.updateBook(updatedBook, bookId, userId);
        res.send(response)
    } catch (err) {
        return res.status(400).send({message: err.message}) 
    }
}

async function deleteBook(req, res){
    const bookId = req.params.id;
    const userId = req.userId;

    try {
        const response = await booksServices.deleteBook(bookId, userId);
        res.send(response)
    } catch (err) {
        return res.status(400).send({message: err.message}) 
    }
}


export default{
    createBook,
    findAllBooks,
    findBookByID,
    updateBook,
    deleteBook
}