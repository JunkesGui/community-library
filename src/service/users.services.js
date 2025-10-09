import usersRepositories from '../repositories/users.respositories.js';

async function createUserService(newUser){
    const user = await usersRepositories.createUserRepository(newUser);
    return user;
}

export default {
    createUserService
}