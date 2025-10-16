import { userIdSchema } from "../schema/user.schema.js";
import { bookIdSchema } from "../schema/book.schema.js";
import { loanIdSchema } from "../schema/loan.schema.js";

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

const  validateLoanId = () => (req, res, next)=>{
    try {
        const loanId = +req.params.id;
        loanIdSchema.parse({loanId: loanId})
        next();
    } catch (err) {
        res.status(400).json({error: err})
    }
}

export {validate, validateUserId, validateBookId, validateLoanId};