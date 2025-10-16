import loansServices from "../service/loans.services.js";

async function createdLoan(req, res) {
    const {bookId, dueDate} = req.body;
    const userId = req.userId;

    try {
        const createdLoan = await loansServices.createLoan(userId, bookId, dueDate);
        res.status(201).send(createdLoan);
    } catch (err) {
        res.status(400).send(err);
    }
}

async function findAllLoans(req, res) {
    try {
        const loans = await loansServices.findAllLoans();
        res.send(loans);
    } catch (err) {
        res.status(404).send(err);
    }
}

async function findLoanById(req, res) {
    const loanId = req.params.id;

    try {
        const loan = await loansServices.findLoanById(loanId);
        res.send(loan);
    } catch (err) {
        res.status(400).send(err);
    }
    
}

async function deleteLoan(req, res) {
    const loanId = req.params.id;
    const userId = req.userId;

    try {
        const response = await loansServices.deleteLoan(loanId, userId);
        res.send(response);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

export default {
    createdLoan,
    findAllLoans,
    findLoanById,
    deleteLoan
}