/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { AdminBookForm } from '@/components/admin/admin-book-form';
import { Book, Category } from '@/lib/types';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';


export default function AdminBooksPage() {
    const [books, setBooks] = useState<Book[]>([]);
    const [categories, setCategories] = useState<{ id: string; name: string; }[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalBooks, setTotalBooks] = useState(0);
    const [limit, setLimit] = useState(10);

    // Função de debounce para atrasar a busca enquanto o usuário digita
    const debounce = (func: Function, delay: number) => {
        let timeoutId: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    // Função para carregar livros com debounce
    const debouncedSearch = useCallback(
        debounce(() => {
            setCurrentPage(1); // Reset para a primeira página ao buscar
            loadBooks();
        }, 500),
        [searchQuery]
    );

    // Efeito para carregar categorias inicialmente
    useEffect(() => {
        loadCategories();
    }, []);

    // Efeito para carregar livros quando mudam os parâmetros de busca ou paginação
    useEffect(() => {
        loadBooks();
    }, [currentPage, limit]);

    // Efeito para aplicar debounce na busca
    useEffect(() => {
        // Apenas configura o temporizador de debounce quando o usuário digita
        // A busca só será executada após o usuário parar de digitar por 500ms
        if (searchQuery !== '') {
            const timer = setTimeout(() => {
                setCurrentPage(1);
                loadBooks();
            }, 500);

            // Limpa o temporizador anterior quando o usuário digita novamente
            return () => clearTimeout(timer);
        } else {
            loadBooks();
        }
    }, [searchQuery]);

    const loadBooks = async () => {
        const params = new URLSearchParams();
        params.set('page', currentPage.toString());
        params.set('limit', limit.toString());

        // Adiciona o termo de busca aos parâmetros da API
        if (searchQuery) {
            params.set('title', searchQuery);
        }

        const response = await fetch(`/api/books?${params.toString()}`);
        if (response.ok) {
            const result = await response.json();
            setBooks(result.items || []);
            setTotalPages(result.totalPages || 1);
            setTotalBooks(result.total || 0);
        }
    };

    const loadCategories = async () => {
        try {
            const response = await fetch('/api/categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Erro ao carregar categorias:', error);
        }
    };

    const handleSubmit = async (bookData: Partial<Book & { categoryId: string }>) => {
        try {
            console.log('Dados do livro:', bookData);

            console.log('Dados enviados:', bookData);

            if (selectedBook) {
                // Edição

                await fetch(`/api/books?id=${selectedBook.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookData)
                });
                setSelectedBook(null);
            } else {
                // Criação


                await fetch('/api/books', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookData)
                });
            }
            const categoriesData = await loadCategories();
            await loadBooks(); // Recarrega a lista
        } catch (error) {
            console.error('Erro ao salvar livro:', error);
        }
    };

    const handleDelete = async (bookId: string) => {
        if (window.confirm('Tem certeza que deseja excluir este livro?')) {
            try {
                await fetch(`/api/books?id=${bookId}`, {
                    method: 'DELETE'
                });
                const categoriesData = await loadCategories();
                await loadBooks();
                if (selectedBook?.id === bookId) {
                    setSelectedBook(null);
                }
            } catch (error) {
                console.error('Erro ao excluir livro:', error);
            }
        }
    };

    // Não precisamos mais filtrar os livros localmente, pois a API já retorna os resultados filtrados

    return (
        <div className="container  mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">Gerenciamento de Livros</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tabela de Livros */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Input
                            type="search"
                            placeholder="Buscar livros..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="max-w-sm"
                        />
                    </div>

                    <div className="bg-white rounded-lg shadow w-full overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Autor</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {books.map((book) => (
                                    <tr key={book.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{book?.category?.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                            <button
                                                onClick={() => setSelectedBook(book)}
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleDelete(book.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                </div>

                {/* Formulário */}
                <div>
                    <AdminBookForm
                        book={selectedBook}
                        categories={categories}
                        onSubmit={handleSubmit}
                        isEditing={!!selectedBook}
                    />
                </div>
            </div>
        </div>
    );
}