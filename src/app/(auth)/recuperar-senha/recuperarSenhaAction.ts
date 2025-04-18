/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import db from '@/lib/db';
import { randomBytes } from 'crypto';
import { sendEmail } from '@/lib/email-service';

export default async function recuperarSenhaAction(_prevState: any, formData: FormData) {
    const email = formData.get('email') as string;

    if (!email) {
        return { success: false, error: 'Email é obrigatório' };
    }

    try {
        // Verificar se o usuário existe
        const user = await db.user.findUnique({
            where: { email }
        });

        if (!user) {
            // Por segurança, não informamos que o email não existe
            return { success: true };
        }

        // Gerar token único
        const resetToken = randomBytes(32).toString('hex');
        const tokenExpiry = new Date(Date.now() + 3600000); // 1 hora de validade

        // Armazenar token no banco de dados
        await db.passwordReset.upsert({
            where: { userId: user.id },
            update: {
                token: resetToken,
                expires: tokenExpiry
            },
            create: {
                userId: user.id,
                token: resetToken,
                expires: tokenExpiry
            }
        });

        // URL de recuperação
        const resetUrl = `${process.env.URL_NEXT_BASE}/nova-senha?token=${resetToken}`;

        // Preparar conteúdo HTML do email
        const htmlContent = `
           <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <title>Recuperação de Senha</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 2rem auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
            overflow: hidden;
        }

        .header {
            background-color: #222;
            color: white;
            text-align: center;
            padding: 2rem;
            display: flex;
        }

        .header h1 {
            margin: 0;
            font-size: 1.8rem;
        }

        .content {
            padding: 2rem;
            color: #333;
        }

        .content p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .button {
            display: inline-block;
            background-color: #222;
            color: #ffffff !important;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            transition: background-color 0.2s ease;
        }

        .button:hover {
            background-color: #444;
        }

        .footer {
            text-align: center;
            font-size: 0.85rem;
            color: #999;
            padding: 1.5rem;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            <h1>Lettuno</h1>
        </div>
        <div class="content">
            <p>Olá,</p>
            <p>Recebemos uma solicitação para redefinir sua senha. Se você fez essa solicitação, clique no botão abaixo
                para criar uma nova senha:</p>
            <p style="text-align: center;">
                <a href="${resetUrl}" class="button">Redefinir senha</a>
            </p>
            <p>Se você não solicitou essa alteração, pode ignorar este e-mail com segurança.</p>
            <p>Boas leituras!<br />Equipe Lettuno</p>
        </div>
        <div class="footer">
            © 2025 Lettuno. Todos os direitos reservados.
        </div>
    </div>
</body>

</html>
        `;

        // Enviar email usando o serviço centralizado
        await sendEmail({
            to: email,
            subject: 'Recuperação de Senha',
            html: htmlContent
        });
        return { success: true };
    } catch (error) {
        console.error('Erro ao processar recuperação de senha:', error);
        return { success: false, error: 'Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.' };
    }
}