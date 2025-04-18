'use client';

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";

import BookModal from './book-modal';

import { Book, Category } from "@/lib/types";
import { useSession } from "next-auth/react";

// Interface para armazenar o progresso de leitura
interface ReadingProgress {
    [bookId: string]: number; // bookId -> número da página
}

interface PaginatedBooks {
    items: Book[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

interface GalleryProps {
    initialBooks: Book[];
    categories: Partial<Category>[];
    totalBooks: number;
    totalPages: number;
    initialPage: number;
    initialLimit: number;
}

export function Gallery({ initialBooks, categories, totalBooks: initialTotalBooks, totalPages: initialTotalPages, initialPage, initialLimit }: GalleryProps) {
    const [books, setBooks] = useState<Book[]>(initialBooks);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [readingProgress, setReadingProgress] = useState<ReadingProgress>({});
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(initialTotalPages);
    const [totalBooks, setTotalBooks] = useState(initialTotalBooks);
    const [limit, setLimit] = useState(initialLimit);
    const { update } = useSession();
    useEffect(() => {
        update();
    }, []);
    // Efeito para resetar a página quando os filtros mudam
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory]);

    // Efeito para carregar os livros filtrados
    useEffect(() => {
        const loadFilteredBooks = async () => {
            const params = new URLSearchParams();
            if (searchQuery) params.set('title', searchQuery);
            if (selectedCategory && selectedCategory != 'all') params.set('category', selectedCategory);
            params.set('page', currentPage.toString());
            params.set('limit', limit.toString());
            params.set('excludeMonthlyCandidates', 'true'); // Excluir livros candidatos ao livro do mês

            const response = await fetch(`/api/books?${params.toString()}`);
            if (response.ok) {
                const result: PaginatedBooks = await response.json();
                setBooks(result.items);
                setTotalPages(result.totalPages);
                setTotalBooks(result.total);
            }
        };
        loadFilteredBooks();
    }, [searchQuery, selectedCategory, currentPage, limit]);

    // Carregar o progresso de leitura do localStorage quando o componente montar
    useEffect(() => {
        const savedProgress = localStorage.getItem('readingProgress');
        if (savedProgress) {
            setReadingProgress(JSON.parse(savedProgress));
        }
    }, []);

    const saveReadingProgress = (bookId: string, page: number) => {
        const updatedProgress = { ...readingProgress, [bookId]: page };
        setReadingProgress(updatedProgress);
        localStorage.setItem('readingProgress', JSON.stringify(updatedProgress));
    };

    return (
        <div className="container mx-auto px-4 py-8 pt-1 w-full">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Categorias para desktop (lado esquerdo) */}
                <div className="hidden md:block w-64 shrink-0">
                    <Card className="bg-stone-200 text-gray-800 border-none shadow-md">
                        <CardContent className="p-4">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Categorias</h3>
                            <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-2">
                                <div className="flex items-center space-x-2 p-2 rounded hover:bg-stone-300 cursor-pointer">
                                    <RadioGroupItem value="all" id="all" className="border-gray-800" />
                                    <label htmlFor="all" className="text-sm font-medium leading-none cursor-pointer w-full">
                                        Todas as categorias
                                    </label>
                                </div>
                                {categories.map((category) => (
                                    <div key={category.id} className="flex items-center space-x-2 p-2 rounded hover:bg-stone-300 cursor-pointer">
                                        <RadioGroupItem value={category.name as string} id={category.id} className="border-gray-800" />
                                        <label htmlFor={category.id} className="text-sm font-medium leading-none cursor-pointer w-full">
                                            {category?.name || ""}
                                        </label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </CardContent>
                    </Card>
                </div>

                {/* Conteúdo principal */}
                <div className="flex-1">
                    <div className="flex flex-col gap-4 mb-8">
                        <Input
                            type="search"
                            placeholder="Buscar livros..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full"
                        />
                        {/* Select para dispositivos móveis */}
                        <div className="md:hidden">
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Categoria" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todas as categorias</SelectItem>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.name as string}>
                                            {category?.name || ""}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Todos os Livros <span className="text-sm font-normal text-gray-500">({totalBooks} livros)</span></h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {books.map((book) => (
                                <BookCard key={book.id} book={book} onSelect={() => setSelectedBook(book)} />
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Itens por página:</span>
                                <Select value={limit.toString()} onValueChange={(value) => { setCurrentPage(1); setLimit(Number(value)) }}>
                                    <SelectTrigger className="w-[80px]">
                                        <SelectValue placeholder="10" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="5">5</SelectItem>
                                        <SelectItem value="10">10</SelectItem>
                                        <SelectItem value="20">20</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {totalPages > 1 && (
                                <Pagination>
                                    <PaginationContent>
                                        {currentPage > 1 && (
                                            <PaginationItem>
                                                <PaginationPrevious
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setCurrentPage(prev => Math.max(prev - 1, 1));
                                                    }}
                                                />
                                            </PaginationItem>
                                        )}

                                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                            // Lógica para mostrar páginas ao redor da página atual
                                            let pageNum;
                                            if (totalPages <= 5) {
                                                pageNum = i + 1;
                                            } else if (currentPage <= 3) {
                                                pageNum = i + 1;
                                            } else if (currentPage >= totalPages - 2) {
                                                pageNum = totalPages - 4 + i;
                                            } else {
                                                pageNum = currentPage - 2 + i;
                                            }

                                            return (
                                                <PaginationItem key={pageNum}>
                                                    <PaginationLink
                                                        href="#"
                                                        isActive={pageNum === currentPage}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setCurrentPage(pageNum);
                                                        }}
                                                    >
                                                        {pageNum}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            );
                                        })}

                                        {currentPage < totalPages && (
                                            <PaginationItem>
                                                <PaginationNext
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                                    }}
                                                />
                                            </PaginationItem>
                                        )}
                                    </PaginationContent>
                                </Pagination>
                            )}
                        </div>
                    </section>
                </div>
            </div>

            <Dialog open={!!selectedBook} onOpenChange={(open) => {
                if (!open) {
                    setSelectedBook(null);
                }
            }}>
                <BookModal
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                    readingProgress={readingProgress}
                    onSaveProgress={saveReadingProgress}
                />
            </Dialog>
        </div>
    );
}

function BookCard({ book, onSelect }: { book: Book; onSelect: () => void }) {
    return (
        <div className="group relative">
            <div className="aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-200 shadow-md transition-all duration-300 group-hover:shadow-xl">
                <img
                    src={book.coverPath || book.cover || ''}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-semibold truncate">{book.title}</h3>
                        <p className="text-sm text-gray-200 truncate">{book.author}</p>
                        <button
                            onClick={onSelect}
                            className="mt-2 w-full rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-white transition-colors duration-200"
                        >
                            Ver Detalhes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}