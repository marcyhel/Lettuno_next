import { Gallery } from '@/components/gallery/gallery';
import { Category } from '@/lib/types';
import { getFilteredBooks } from '@/lib/wrappers/book';
import { getAllCategories } from '@/lib/wrappers/category';

export default async function GaleriaPage() {
    // Busca os livros com paginação usando o wrapper
    const result = await getFilteredBooks({}, 1, 10);
    const categorias = await getAllCategories();

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Galeria de Livros</h1>
            <Gallery
                initialBooks={result.items}
                totalBooks={result.total}
                totalPages={result.totalPages}
                initialPage={result.page}
                initialLimit={result.limit}
                categories={categorias as Partial<Category>[]}
            />
        </div>
    );
}