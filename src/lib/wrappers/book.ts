
import prisma from '@/lib/db';
import { Book } from '../types';
import { book, Prisma } from 'generated/prisma';
// import { Prisma } from '@prisma/client';

export interface BookFilter {
    title?: string;
    category?: string;
}


export async function getAllBooks(): Promise<book[]> {
    return await prisma.book.findMany({
        include: {
            category: true,
        },
    });
}


export async function getPopularBooks(page: number = 1, limit: number = 6): Promise<PaginatedResult<book>> {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
        prisma.book.findMany({
            include: {
                category: true,
            },
            orderBy: {
                reviewCount: 'desc',
            },
            skip,
            take: limit,
        }),
        prisma.book.count()
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
        items,
        total,
        page,
        limit,
        totalPages,
    };
}

export interface PaginatedResult<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export async function getFilteredBooks(
    filter: { title?: string; category?: string; monthlyCandidate?: boolean },
    page: number = 1,
    limit: number = 10
): Promise<PaginatedResult<book>> {
    const { title, category, monthlyCandidate } = filter;
    const skip = (page - 1) * limit;

    const where: Prisma.bookWhereInput = {
        AND: [
            ...(title
                ? [{
                    title: {
                        contains: title,
                        mode: Prisma.QueryMode.insensitive,
                    }
                }] : []),
            ...(category
                ? [{
                    category: {
                        name: {
                            contains: category,
                            mode: Prisma.QueryMode.insensitive,
                        }
                    }
                }] : []),
            ...(typeof monthlyCandidate === 'boolean'
                ? [{ monthlyCandidate }] : []),
        ]
    };

    const [items, total] = await Promise.all([
        prisma.book.findMany({
            where: where,
            include: {
                category: true,
                favoriteByUsers: true,
            },
            skip,
            take: limit,
            orderBy: {
                title: 'asc',
            },
        }),
        prisma.book.count({ where }),
    ]);


    const totalPages = Math.ceil(total / limit);

    return {
        items,
        total,
        page,
        limit,
        totalPages,
    };
}


// export async function getAllBooks(): Promise<book[]> {
//     return await prisma.book.findMany();
// }

// export async function getPopularBooks(limit: number = 6): Promise<book[]> {
//     return await prisma.book.findMany({
//         orderBy: {
//             reviewCount: 'desc'
//         },
//         take: limit
//     });
// }

// export async function getFilteredBooks(filter: BookFilter): Promise<book[]> {
//     const { title, category } = filter;

//     return await prisma.book.findMany({
//         where: {
//             AND: [
//                 title ? {
//                     title: {
//                         contains: title,
//                         mode: 'insensitive'
//                     }
//                 } : {},
//                 category ? { category: { name: { contains: category, mode: 'insensitive' } } } : {}
//             ]
//         }
//     });
// }

export async function selectRandomBookOfTheMonth(): Promise<book> {
    // Verifica se há um livro do mês atual
    const currentFeatured = await prisma.monthly_featured_book.findFirst();

    // Se houver, atualiza o book correspondente para monthlyCandidate = false
    if (currentFeatured) {
        await prisma.book.update({
            where: {
                id: currentFeatured.originalBookId as string,
            },
            data: {
                monthlyCandidate: false,
            },
        });

        // Remove o livro do mês anterior
        await prisma.monthly_featured_book.delete({
            where: { id: currentFeatured.id },
        });
    }
    const where: Prisma.bookWhereInput = {
        monthlyCandidate: true,
        ...(currentFeatured?.originalBookId
            ? {
                id: {
                    not: currentFeatured.originalBookId,
                }
            }
            : {})
    };
    // Busca todos os candidatos válidos (exceto o que estava como destaque, se existir)
    const candidates = await prisma.book.findMany({
        where,
        include: {
            category: true,
        },
    });

    if (candidates.length === 0) {
        throw new Error('Não há candidatos disponíveis para selecionar como livro do mês');
    }

    // Seleciona um livro aleatório
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const selectedBook = candidates[randomIndex];

    // Cria o novo livro do mês
    const featuredBook = await prisma.monthly_featured_book.create({
        data: {
            title: selectedBook.title,
            author: selectedBook.author,
            description: selectedBook.description,
            cover: selectedBook.cover,
            coverPath: selectedBook.coverPath,
            filePath: selectedBook.filePath,
            categoryId: selectedBook.categoryId,
            price: selectedBook.price,
            rating: selectedBook.rating,
            reviewCount: selectedBook.reviewCount,
            originalBookId: selectedBook.id,
        },
    });

    return featuredBook;
}


export async function createBook(bookData: Omit<book, 'id' | 'createdAt' | 'updatedAt'> & { categoryId: string }): Promise<book> {
    const { categoryId, ...rest } = bookData;

    return await prisma.book.create({
        data: {
            ...rest,
            category: {
                connect: { id: categoryId }
            }
        }
    });
}

export async function updateBook(id: string, bookData: Partial<Omit<book, 'id' | 'createdAt' | 'updatedAt'>>): Promise<book> {
    return await prisma.book.update({
        where: { id },
        data: bookData
    });
}

export async function deleteBook(id: string): Promise<Book> {
    return await prisma.book.delete({
        where: { id }
    });
}