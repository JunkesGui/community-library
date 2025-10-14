import {Router} from 'express';
import userControllers from '../controller/users.controllers.js';
import { validate, validateUserId } from '../middlewares/validation.middlewares.js';
import { userIdSchema, userSchema } from '../schema/user.schema.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// POST
// Criar usuario
router.post('/users', validate(userSchema), userControllers.createUserController);

//Login
router.post('/users/login', userControllers.loginUser);


router.use(authMiddleware);

// GET
router.get('/users', userControllers.findAllUsers);
router.get('/users/:id', validateUserId(userIdSchema) ,userControllers.findUserById);

//PUT
router.patch('/users/:id', validateUserId(userIdSchema), validate(userSchema) ,userControllers.updateUser);

// DELETE
router.delete('/users/:id', validateUserId(userIdSchema), userControllers.deleteUser);

export default router