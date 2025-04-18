import prisma from '@/lib/db';

export async function getAllCategories() {
    return await prisma.category.findMany({
        orderBy: {
            name: 'asc'
        }
    });
}

export async function getCategoryById(id: string) {
    return await prisma.category.findUnique({
        where: { id },
        include: { books: true }
    });
}

export async function createCategory(name: string) {
    return await prisma.category.create({
        data: { name }
    });
}

export async function updateCategory(id: string, name: string) {
    return await prisma.category.update({
        where: { id },
        data: { name }
    });
}

export async function deleteCategory(id: string) {
    return await prisma.category.delete({
        where: { id }
    });
}