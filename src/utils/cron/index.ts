import { startMonthlyBookCron } from './monthly-book-cron';

// Função para iniciar todos os cron jobs da aplicação
export function startAllCronJobs() {
    console.log('Cron job para atualização do livro do mês iniciado. 1');
    // Inicia o cron job para atualização do livro do mês
    startMonthlyBookCron();

    // Aqui podem ser adicionados outros cron jobs no futuro
    // exemplo: startOtherCron();
}