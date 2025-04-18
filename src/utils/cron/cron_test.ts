import { CronJob } from 'cron';

const job = new CronJob(
    '*/5 * * * * *', // a cada 5 segundos
    () => {
        console.log('Cron rodou em', new Date().toLocaleTimeString());
    },
    null,
    false,
    'America/Sao_Paulo'
);

job.start();

console.log('Cron job iniciado...');
