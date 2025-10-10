import {Router} from 'express';
import userControllers from '../controller/users.controllers.js';
import { validate } from '../middlewares/validation.middlewares.js';
import { userSchema } from '../schema/user.schema.js';

const router = Router();

router.post('/users', validate(userSchema), userControllers.createUserController);

router.get('/users', userControllers.findAllUsers)

export default router