import {Router} from 'express';
import userControllers from '../controller/users.controllers.js';

const router = Router();

router.post('/users', userControllers.createUserController)

export default router