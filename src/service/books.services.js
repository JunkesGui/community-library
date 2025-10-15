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

async function findBookByID(bookId){
    const book = await booksRepositories.findBookByID(bookId);
    if (!book) throw new Error ("Book not found");
    return book;
}

async function updateBook(updatedBook, bookId, userId){
    const book = await booksRepositories.findBookByID(bookId);
    if (!book) throw new Error ("Book not found");
    if (book.userId !== userId) throw new Error ("Unauthorized");
    const response = await booksRepositories.updateBook(bookId,updatedBook);
    return response;
}

async function deleteBook(bookId, userId){
    const book = await booksRepositories.findBookByID(bookId);
    if (!book) throw new Error ("Book not found");
    if (book.userId !== userId) throw new Error ("Unauthorized");
    const response = await booksRepositories.deleteBook(bookId);
    return response;
}

async function searchBook(search){
    if (!search) return await booksRepositories.findAllBooks();
    const books = await booksRepositories.searchBook(search);
    return books;
}

export default{
    createBook,
    findAllBooks,
    findBookByID,
    updateBook,
    deleteBook,
    searchBook
}