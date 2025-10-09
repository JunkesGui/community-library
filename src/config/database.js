import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('library_db.sqlite',  (err) =>{
    if (err){
        console.log('Failed to connect to DB: ', err.message);
    } else{
        console.log('Sucessfully connected to DB');
    }
})

export default db;