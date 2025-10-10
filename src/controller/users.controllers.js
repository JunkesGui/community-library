import userServices from '../service/users.services.js'

async function createUserController(req,res){
    const newUser = req.body;

    try {
        const user = await userServices.createUserService(newUser)
        res.status(201).send({user})
    } catch (err) {
        return res.status(400).send(err.message);        
    }
}

async function findAllUsers(req,res){
    try {
        const users = await userServices.findAllUsers();
        res.send({users});
    } catch (error) {
        return res.status(404).send(error.message);
    }
}



export default {
    createUserController,
    findAllUsers
}