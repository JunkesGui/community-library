import usersRepositories from '../repositories/users.respositories.js';
import bcrypt from 'bcrypt';

async function createUserService(newUser){
    const searchUser = await usersRepositories.findUserByEmail(newUser.email)
    if (searchUser) throw new Error("User already exists!")

    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await usersRepositories.createUserRepository({...newUser, password: passHash});
    if(!user) throw new Error("Error at the user creation")
    return user;
}

async function findAllUsers() {
    const users = await usersRepositories.findAllUsers();
    return users;
}

async function findUserByID(id){
    const user = await usersRepositories.findUserById(id)
    if (!user) throw new Error ('User not found')
    return user;
}

export default {
    createUserService,
    findAllUsers,
    findUserByID
}