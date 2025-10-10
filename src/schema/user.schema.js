import {z} from 'zod';

const userSchema = z.object({
    username: z.string().min(3, 'Username is too short'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password is too short'),
    avatar: z.string().url('Invalid URL').optional()
});

const userIdSchema = z.object({
    userId: z.number().int().positive('User ID must be a positive integer')
});

export {userSchema, userIdSchema};