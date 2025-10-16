import { Router } from "express";
import loansController from "../controller/loans.controller.js";
import { validate, validateLoanId } from "../middlewares/validation.middlewares.js"
import { loanSchema } from "../schema/loan.schema.js"
import { loanIdSchema } from "../schema/loan.schema.js"

const router = Router();

//POST
router.post("/loans", validate(loanSchema) ,loansController.createdLoan);

//GET
router.get("/loans", loansController.findAllLoans);
router.get("/loans/:id", validateLoanId(loanIdSchema), loansController.findLoanById);

//DELETE
router.delete("/loans/:id", validateLoanId(loanIdSchema), loansController.deleteLoan)

export default router;