import {Router} from 'express';
import userControllers from '../controller/users.controllers.js';
import { validate, validateUserId } from '../middlewares/validation.middlewares.js';
import { userIdSchema, userSchema } from '../schema/user.schema.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// POST
// Criar usuario
router.post('/', validate(userSchema), userControllers.createUserController);

//Login
router.post('/login', userControllers.loginUser);


router.use(authMiddleware);

// GET
router.get('/', userControllers.findAllUsers);
router.get('/:id', validateUserId(userIdSchema) ,userControllers.findUserById);

//PUT
router.patch('/:id', validateUserId(userIdSchema), validate(userSchema) ,userControllers.updateUser);

// DELETE
router.delete('/:id', validateUserId(userIdSchema), userControllers.deleteUser);

export default router