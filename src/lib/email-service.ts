'use server';

import nodemailer from 'nodemailer';

type EmailParams = {
    to: string;
    subject: string;
    html: string;
    from?: string;
};

/**
 * Serviço para envio de emails
 * @param params Parâmetros do email (destinatário, assunto, conteúdo HTML)
 * @returns Objeto com status de sucesso ou erro
 */
export async function sendEmail(params: EmailParams) {
    const { to, subject, html, from } = params;

    try {
        // Configurar transporte de email
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        // Enviar email
        await transporter.sendMail({
            from: from || process.env.EMAIL_USER,
            to,
            subject,
            html
        });

        return { success: true };
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return {
            success: false,
            error: 'Ocorreu um erro ao enviar o email. Tente novamente mais tarde.'
        };
    }
}