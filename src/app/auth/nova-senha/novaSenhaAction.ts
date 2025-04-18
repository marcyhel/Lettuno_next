/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import db from '@/lib/db';
import { hashSync } from 'bcrypt-ts';

export default async function novaSenhaAction(_prevState: any, formData: FormData) {
    const token = formData.get('token') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!token) {
        return { success: false, error: 'Token inválido ou expirado' };
    }

    if (!password || !confirmPassword) {
        return { success: false, error: 'Todos os campos são obrigatórios' };
    }

    if (password !== confirmPassword) {
        return { success: false, error: 'As senhas não coincidem' };
    }

    if (password.length < 6) {
        return { success: false, error: 'A senha deve ter pelo menos 6 caracteres' };
    }

    try {
        // Buscar o registro de reset de senha pelo token
        const passwordReset = await db.passwordReset.findFirst({
            where: {
                token,
                expires: { gt: new Date() } // Verifica se o token ainda é válido
            },
            include: { user: true }
        });

        if (!passwordReset) {
            return { success: false, error: 'Token inválido ou expirado' };
        }

        // Hash da nova senha
        const hashedPassword = hashSync(password, 10);

        // Atualizar a senha do usuário
        await db.user.update({
            where: { id: passwordReset.userId },
            data: { password: hashedPassword }
        });

        // Remover o token de reset após uso
        await db.passwordReset.delete({
            where: { id: passwordReset.id }
        });

        return { success: true };
    } catch (error) {
        console.error('Erro ao redefinir senha:', error);
        return { success: false, error: 'Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.' };
    }
}