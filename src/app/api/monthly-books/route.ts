import { NextResponse } from 'next/server';
import {

    getCurrentFeaturedBook,

} from '@/lib/wrappers/monthly-book';

export async function GET(request: Request) {
    console.log('GET request received');
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type') || 'candidates';

        if (type === 'featured') {
            const featuredBook = await getCurrentFeaturedBook();
            return NextResponse.json(featuredBook);
        }

        return NextResponse.json(
            { error: 'Invalid type parameter' },
            { status: 400 }
        );
    } catch (error) {
        console.error('Error fetching monthly books:', error);
        return NextResponse.json(
            { error: 'Failed to fetch monthly books' },
            { status: 500 }
        );
    }
}

