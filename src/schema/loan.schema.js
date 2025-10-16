import { z } from "zod";

const loanSchema = z.object({
    bookId: z.number().int().positive('Book Id must be a positive integer'),
    dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).min(10, "Due date must be in YYYY-MM-DD format")
});

const loanIdSchema = z.object({
    loanId: z.number().int().positive('Loan Id must be a positive integer')
});

export { loanSchema, loanIdSchema}