import { selectRandomBookOfTheMonth } from '@/lib/wrappers/book';
import { CronJob } from 'cron';


// Cria um cron job que executa no primeiro dia de cada mês às 00:00
export const monthlyBookCron = new CronJob(
    '0 * * * * *', // Executa às 00:00 do dia 1 de cada mês
    async () => {
        try {
            console.log('Iniciando seleção do livro do mês...');
            await selectRandomBookOfTheMonth();
            console.log('Livro do mês atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar o livro do mês:', error);
        }
    },
    null, // onComplete
    false, // start
    'America/Sao_Paulo' // timezone
);

// Função para iniciar o cron job
export function startMonthlyBookCron() {
    console.log('Cron job para atualização do livro do mês iniciado.');
    monthlyBookCron.start();

}