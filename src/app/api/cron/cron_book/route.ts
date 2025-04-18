import { NextRequest, NextResponse } from 'next/server';
import { selectRandomBookOfTheMonth } from '@/lib/wrappers/book';

// Função para verificar se a requisição tem a chave de autenticação correta
function isAuthorized(request: NextRequest) {
    // Você deve definir uma variável de ambiente CRON_SECRET no painel da Vercel
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.CRON_SECRET;

    if (!expectedToken) {
        console.warn('CRON_SECRET não está configurado');
        return false;
    }

    return authHeader === `Bearer ${expectedToken}`;
}

// Endpoint para ser chamado pelo Vercel Cron
export async function GET(request: NextRequest) {
    // Verifica se a requisição está autorizada
    if (!isAuthorized(request)) {
        return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    try {
        console.log('Iniciando seleção do livro do mês...');
        const book = await selectRandomBookOfTheMonth();
        console.log('Livro do mês atualizado com sucesso!');

        return NextResponse.json({
            success: true,
            message: 'Livro do mês atualizado com sucesso',
            book: {
                id: book.id,
                title: book.title,
                author: book.author
            }
        });
    } catch (error) {
        console.error('Erro ao atualizar o livro do mês:', error);
        return NextResponse.json({
            success: false,
            error: 'Falha ao atualizar o livro do mês'
        }, { status: 500 });
    }
}