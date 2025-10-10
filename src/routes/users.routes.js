import {Router} from 'express';
import userControllers from '../controller/users.controllers.js';
import { validate } from '../middlewares/validation.middlewares.js';
import { userSchema } from '../schema/user.schema.js';

const router = Router();

// POST
router.post('/users', validate(userSchema), userControllers.createUserController);

// GET
router.get('/users', userControllers.findAllUsers);
router.get('/users/:id', userControllers.findUserById);

//PUT
router.put('/users/:id', validate(userSchema) ,userControllers.updateUser);

export default router