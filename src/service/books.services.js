import booksRepositories from "../repositories/books.repositories.js";

async function createBook(newBook, userId){
    const createdBook = await booksRepositories.createBook(newBook, userId);
    if(!createdBook) throw new Error("Failed to create book");
    return createdBook;
}

async function findAllBooks() {
    const books = await booksRepositories.findAllBooks();
    return books;
}


export default{
    createBook,
    findAllBooks
}