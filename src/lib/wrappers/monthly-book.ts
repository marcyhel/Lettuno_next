/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '@/lib/db';

// import { MonthlyFeaturedBook } from '../types';
// Funções para gerenciar o livro em destaque do mês
export async function getCurrentFeaturedBook(): Promise<any | null> {
    return await prisma.monthly_featured_book.findFirst({
        include: {
            category: true, // Inclui a categoria
        },
    });
}



