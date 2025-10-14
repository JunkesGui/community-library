import jwt from "jsonwebtoken";
import "dotenv/config";
import usersRespositories from "../repositories/users.respositories.js";
import bcrypt from "bcrypt";

function generateJWT(id){
    return jwt.sign({id}, process.env.SECRET_JWT,
        {expiresIn: 86400}
    )
}

async function loginService(email, password) {
    const user = await usersRespositories.findUserByEmail(email);
    if(!user) throw new Error('Invalid user');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) throw new Error('Invalid user');
    return generateJWT(user.id)
}

export {generateJWT, loginService}