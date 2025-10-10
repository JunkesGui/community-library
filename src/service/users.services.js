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

async function updateUser(newUser, userId){
    const user = await usersRepositories.findUserById(userId)
    if (!user) throw new Error('User not found!')
    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, 10)
    }
    const updatedUser = usersRepositories.updateUser(userId, newUser)
    return updatedUser 
}

async function deleteUser(userId){
    const user = await usersRepositories.findUserById(userId);
    if (!user) throw new Error('User not found!');
    const {message} = await usersRepositories.deleteUser(userId);
    return message;
}

export default {
    createUserService,
    findAllUsers,
    findUserByID,
    updateUser,
    deleteUser
}