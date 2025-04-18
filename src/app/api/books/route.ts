/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
import { createBook, deleteBook, getFilteredBooks, getPopularBooks, updateBook } from '@/lib/wrappers/book';
import { NextResponse } from 'next/server';
// import { getFilteredBooks, getPopularBooks, createBook, updateBook, deleteBook } from '@/lib/wrappers/book';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const title = searchParams.get('title') || '';
        const category = searchParams.get('category') || '';
        const type = searchParams.get('type') || 'all';
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const excludeMonthlyCandidates = searchParams.get('excludeMonthlyCandidates') === 'true';

        if (type === 'popular') {
            const books = await getPopularBooks(page, limit);
            return NextResponse.json(books);
        }

        const categoryName = category; // já pegou acima
        const filters: any = { title, category: categoryName };

        if (excludeMonthlyCandidates) {
            filters.monthlyCandidate = false;
        }

        const result = await getFilteredBooks(filters, page, limit);
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching books:', error);
        return NextResponse.json(
            { error: 'Failed to fetch books' },
            { status: 500 }
        );
    }
}


export async function POST(request: Request) {
    try {
        var bookData = await request.json();
        console.log('Book Data1:', bookData);
        const { isMonthlyCandidate, ...rest } = bookData;

        const formattedData = {
            ...rest,
            monthlyCandidate: isMonthlyCandidate,
        };
        bookData = formattedData
        console.log('Book Data2:', bookData);
        const book = await createBook(bookData);
        return NextResponse.json(book);
    } catch (error) {
        console.error('Error creating book:', error);
        return NextResponse.json(
            { error: 'Failed to create book' },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json(
                { error: 'Book ID is required' },
                { status: 400 }
            );
        }

        const bookData = await request.json();
        console.log('Book Data:', bookData);
        // Separate categoryId from the rest of the book data for connectio
        const { categoryId, ...rest } = bookData;

        const updatedBook = await updateBook(id, {
            ...rest,
            ...(categoryId && {
                category: {
                    connect: { id: categoryId }
                }
            })
        });

        return NextResponse.json(updatedBook);
    } catch (error) {
        console.error('Error updating book:', error);
        return NextResponse.json(
            { error: 'Failed to update book' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json(
                { error: 'Book ID is required' },
                { status: 400 }
            );
        }

        const book = await deleteBook(id);
        return NextResponse.json(book);
    } catch (error) {
        console.error('Error deleting book:', error);
        return NextResponse.json(
            { error: 'Failed to delete book' },
            { status: 500 }
        );
    }
}