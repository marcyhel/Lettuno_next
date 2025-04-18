
export interface User {
    id: string;
    name: string;
    email: string;
    emailVerified?: Date;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    role: 'USER' | 'ADMIN';
    favoriteBooks?: Book[];
    subscriptionId?: string;
    subscriptionStatus?: string;
    subscriptionPlan?: string;
    subscriptionPrice?: number;
    subscriptionEndDate?: Date;
}

export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    cover?: string | null;
    coverPath?: string | null;
    filePath?: string | null;
    categoryId?: string | null;
    category?: Category;
    price: number;
    rating?: number | null;
    reviewCount?: number | null;
    createdAt: Date;
    updatedAt: Date;
    favoriteByUsers?: User[];
    monthlyCandidate?: boolean | null;
}

export interface Category {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface MonthlyFeaturedBook {
    id: string;
    title: string;
    author: string;
    description: string;
    cover?: string | null;  // Agora aceita `null`
    coverPath?: string;
    filePath?: string;
    categoryId: string;
    category?: Category;
    price: number;
    rating?: number;
    reviewCount?: number;
    originalBookId: string;
    featuredMonth: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
}