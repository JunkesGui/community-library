import db from "../config/database.js"

db.run(
    `CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users(id)
    )`
);

function createBook(newBook, userId){
    return new Promise((resolve, reject) => {
        const {title, author} = newBook;
        db.run(
            `INSERT INTO books (title, author, userId) VALUES (?, ?, ?)`,
            [title, author, userId],
            function (err) {
                if (err){
                    reject(err);
                } else {
                    resolve({id: this.lastID, ...newBook});
                }
            }
        );
    });
}

function findAllBooks(){
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM books`, [], (err, rows) =>{
            if (err) {
                reject(err);
            }else{
                resolve(rows);
            }
        });
    });
}

function findBookByID(bookId){
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM books WHERE id = ?`, [bookId], (err, row) =>{
            if (err) {
                reject(err);
            }else{
                resolve(row);
            }
        });
    });
}

function updateBook(bookId, updatedBook){
    return new Promise((resolve, reject) => {
        const fields = ['title', 'author', 'userId'];
        let query = "UPDATE books SET ";
        const values = [];

        fields.forEach((field) =>{
            if (updatedBook[field] !== undefined){
                query += `${field} = ?,`;
                values.push(updatedBook[field]);
            }
        })
        query = query.slice(0,-1);
        query += " WHERE id = ?"
        values.push(bookId);

        db.run(query, values, function (err){
            if (err) {
                reject(err);
            }else{
                resolve({bookId, ...updatedBook});
            }
        });
    });
}

function deleteBook(bookId){
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM books WHERE id = ?`, [bookId], function (err){
            if (err) {
                reject(err);
            }else{
                resolve({message: "Book sucessfully deleted"});
            }
        })
    })
}

function searchBook(search){
    return new Promise((resolve, reject) => {
        db.all(`
            SELECT * FROM books WHERE title LIKE ? OR author LIKE ?
            `, [`%${search}%`, `%${search}%`], (err,rows) =>{
            if (err) {
                reject(err);
            }else{
                resolve(rows);
            }
            })
    })
}

export default {
    createBook,
    findAllBooks,
    findBookByID,
    findBookByID,
    updateBook,
    deleteBook,
    searchBook
}