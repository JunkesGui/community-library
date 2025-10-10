import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
`)

function createUserRepository(newUser) {
    return new Promise((res, rej) => {
        const {username, email, password, avatar} = newUser
        db.run(`
            INSERT INTO users(username, email, password, avatar)
            VALUES (?, ?, ?, ?)
            `, [username, email, password, avatar], 
            (err) =>{
                if(err){
                    rej(err)
                } else{
                    res({id: this.lastID, ...newUser})
                }
            }
        )
    })
}

function findUserByEmail(email) {
    return new Promise((resolve, reject) => {
        db.get(`
            SELECT id, username, email, avatar FROM users WHERE email = ?
            `, [email], (err, row) =>{
                if(err){
                    reject(err)
                } else{
                    resolve(row)
                }
            })
    })
}

function findUserById(id) {
    return new Promise((resolve, reject) => {
        db.get(`
            SELECT id, username, email, avatar FROM users WHERE id = ?
            `, [id], (err, row) =>{
                if(err){
                    reject(err)
                } else{
                    resolve(row)
                }
            });
    });
}

function findAllUsers(){
    return new Promise((resolve, reject) => {
        db.all(`
            SELECT id, username, email, avatar FROM users
            `, [], (err, rows) =>{
                if(err){
                    reject(err)
                } else {
                    resolve(rows)
                }
            });
    });
}

function updateUser(id, updatedUser){
    return new Promise((resolve, reject) => {
        const {username, email, password, avatar} = updatedUser
        db.run(`
            UPDATE users SET username=?, email=?, password=?, avatar=?           
            WHERE id = ?
            `, [username, email, password, avatar, id], (err) =>{
                if(err){
                    reject(err)
                } else{
                    resolve({id, ...updatedUser})
                }
            });
    });
}

function deleteUser(id){
    return new Promise((resolve, reject) => {
        db.run(`
            DELETE FROM users WHERE id = ?
            `, [id], (err) =>{
                if (err){
                    reject(err)
                } else{
                    const message = `User ${id} deleted successfully!`
                    resolve({message: message})
                }
            })
    })
}

export default {
    createUserRepository,
    findUserByEmail,
    findUserById,
    findAllUsers,
    updateUser,
    deleteUser
}