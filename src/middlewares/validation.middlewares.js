import { userIdSchema } from "../schema/user.schema.js";
import { bookIdSchema } from "../schema/book.schema.js";

const validate = (schema) => (req, res, next) =>{
    try {
        schema.parse(req.body);
        next()
    } catch (err) {
        res.status(400).json({error: err});
    }
}

const validateUserId = () => (req,res,next) => {
    try {
        const userId = +req.params.id;
        userIdSchema.parse({userId: userId})
        next();
    } catch (err) {
        res.status(400).json({error: err});
    }
}

const validateBookId = () => (req,res,next)=>{
    try {
        const bookId = +req.params.id;
        bookIdSchema.parse({bookId: bookId})
        next();
    } catch (err) {
        res.status(400).json({error: err})
    }
}

export {validate, validateUserId, validateBookId};