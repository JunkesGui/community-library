import loansRepositories from "../repositories/loans.repositories.js";

async function createLoan(userId, bookId, dueDate) {
    const createdLoan = await loansRepositories.createLoan(userId, bookId, dueDate)
    if  (!createdLoan) throw new Error("Error Creating Loan")
    return createdLoan;    
}

async function findAllLoans() {
    const loans = await loansRepositories.findAllLoans();
    return loans;
}

async function findLoanById(loanId) {
    const loan = await loansRepositories.findLoanById(loanId);
    if (!loan) throw new Error("Could not find loan");
    return loan;
}

async function deleteLoan(loanId, userId) {
    const loan = await loansRepositories.findLoanById(loanId);
    if (!loan) throw new Error("Could not find loan");
    if (loan.userId !== userId) throw new Error ("Unauthorized");
    const response = await loansRepositories.deleteLoan(loanId);
    return response    
}

export default {
    createLoan,
    findAllLoans,
    findLoanById,
    deleteLoan
}