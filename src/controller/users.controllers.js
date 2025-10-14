import userServices from '../service/users.services.js'

async function createUserController(req,res){
    const newUser = req.body;

    try {
        const token = await userServices.createUserService(newUser)
        res.status(201).send({token})
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

async function findUserById(req, res){
    const {id} = req.params;
    try {
        const user = await userServices.findUserByID(id)
        res.send({user});
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

async function updateUser(req, res){
    const {id} = req.params;
    const newUser = req.body;

    try {
        const user = await userServices.updateUser(newUser, id);
        res.send({user});
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

async function deleteUser(req,res){
    const {id} = req.params;

    try {
        const message = await userServices.deleteUser(id);
        res.send({message});
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

export default {
    createUserController,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
}