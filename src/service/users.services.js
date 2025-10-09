import usersRepositories from '../repositories/users.respositories.js';

async function createUserService(newUser){
    const searchUser = await usersRepositories.findUserByEmail(newUser.email)
    if (searchUser) throw new Error("User already exists!")
    const user = await usersRepositories.createUserRepository(newUser);
    return user;
}

export default {
    createUserService
}