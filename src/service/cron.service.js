import cron from 'node-cron'
import loansRepositories from '../repositories/loans.repositories.js'
import emailService from './email.service.js';
import moment from 'moment';

cron.schedule('35 * * * *', async () =>{
    console.log('running daily job');
    const loans = await loansRepositories.findAllLoans();

    const today = moment().startOf('day');

    loans.forEach(async (loan) => {
        const dueDate = moment(loan.dueDate).startOf('day');
        const reminderDueDate = moment(dueDate).subtract(1, 'days');

        if(today.isSame(reminderDueDate)){
            emailService.sendEmail(loan.email, loan.title, dueDate);
        }
    });
})