/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Book } from '@/lib/types';

// interface Book {
//     id: string;
//     title: string;
//     author: string;
//     description: string;
//     cover?: string;
//     price: number;
//     rating: number | null;
//     reviewCount: number | null;
//     category?: Category;
//     categoryId?: string;
//     filePath?: string;
//     monthlyCandidate?: boolean;
// }

interface Category {
    id: string;
    name: string;
}

interface AdminBookFormProps {
    book: Partial<Book> | null;
    categories: Category[];
    onSubmit: (bookData: Partial<Book & { categoryId: string }>) => void;
    isEditing: boolean;
}

export function AdminBookForm({ book, categories, onSubmit, isEditing = false }: AdminBookFormProps) {
    const [formData, setFormData] = useState<Partial<Book> & { categoryId?: string }>(
        book
            ? { ...book, categoryId: book.categoryId ?? undefined }
            : {
                title: '',
                author: '',
                description: '',
                categoryId: '',
                cover: '',
                price: 0,
                monthlyCandidate: false,
            }
    );

    useEffect(() => {
        if (book) {
            const safeBook: Partial<Book> & { categoryId?: string } = {
                ...book,
                categoryId: book.categoryId ?? undefined,
            };
            setFormData(safeBook);
        }
    }, [book]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.categoryId) return;

        const form = e.target as HTMLFormElement;
        const pdfInput = form.querySelector('input[name="pdf"]') as HTMLInputElement;
        const coverInput = form.querySelector('input[name="cover"]') as HTMLInputElement;
        const pdfFile = pdfInput?.files?.[0];
        const coverFile = coverInput?.files?.[0];

        try {
            // Import das funções do Firebase Storage
            const { uploadFileToFirebase, createCoverFromTitle } = await import('@/lib/firebase-storage');

            // Upload PDF para o Firebase Storage
            if (pdfFile) {
                try {
                    // Upload do arquivo PDF para o Firebase
                    const fileUrl = await uploadFileToFirebase(pdfFile, 'books');
                    formData.filePath = fileUrl;

                    // Gerar capa do PDF se necessário
                    if (!coverFile) {
                        // Criar uma capa com o título do livro
                        const title = formData.title || 'Livro';

                        try {
                            // Criar uma capa com o título e fazer upload para o Firebase
                            const bytes = await pdfFile.arrayBuffer();
                            const buffer = Buffer.from(bytes);

                            // Criar uma capa simples com o título
                            const coverBuffer = await createCoverFromTitle(title);

                            // Upload da capa para o Firebase
                            const coverUrl = await import('@/lib/firebase-storage')
                                .then(module => module.uploadBufferToFirebase(coverBuffer, 'covers', 'cover.jpg'));

                            formData.cover = coverUrl;
                            formData.coverPath = coverUrl;
                        } catch (error) {
                            console.error('Erro ao gerar capa:', error);
                            // Usar URL da capa padrão
                            formData.cover = `/covers/default-cover.jpg`;
                            formData.coverPath = `/covers/default-cover.jpg`;
                        }
                    }
                } catch (error) {
                    console.error('Erro ao fazer upload do PDF para o Firebase:', error);
                    return;
                }
            }

            // Upload imagem da capa para o Firebase Storage (se houver)
            if (coverFile) {
                try {
                    // Upload da imagem para o Firebase
                    const coverUrl = await uploadFileToFirebase(coverFile, 'covers');
                    formData.cover = coverUrl;
                    formData.coverPath = coverUrl;
                    console.log('formData', formData);
                } catch (error) {
                    console.error('Erro ao fazer upload da capa para o Firebase:', error);
                    return;
                }
            }
        } catch (error) {
            console.error('Erro ao fazer upload:', error);
            return;
        }

        // ✅ Envia apenas os dados válidos ao backend
        const {
            title,
            author,
            description,
            cover,
            coverPath,
            price,
            rating,
            reviewCount,
            filePath,
            monthlyCandidate,
            categoryId,
        } = formData;

        await onSubmit({
            title,
            author,
            description,
            cover,
            coverPath,
            price,
            rating,
            reviewCount,
            filePath,
            monthlyCandidate,
            categoryId: categoryId!,
        });

        // ✅ Limpa o formulário se não estiver editando
        if (!isEditing) {
            setFormData({
                title: '',
                author: '',
                description: '',
                cover: '',
                price: 0,
                categoryId: '',
                filePath: '',
                monthlyCandidate: false,
            });

            if (pdfInput) pdfInput.value = '';
            if (coverInput) coverInput.value = '';
        }
    };

    const handleChange = (field: keyof Book, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
                {isEditing ? 'Editar Livro' : 'Adicionar Novo Livro'}
            </h2>

            <div className="space-y-2">
                <label className="text-sm font-medium">Título</label>
                <Input
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Título do livro"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Autor</label>
                <Input
                    value={formData.author}
                    onChange={(e) => handleChange('author', e.target.value)}
                    placeholder="Nome do autor"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Descrição</label>
                <Textarea
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    placeholder="Descrição do livro"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Categoria</label>
                <Select
                    value={formData.categoryId || ''}
                    onValueChange={(value) => handleChange('categoryId', value)}
                    required
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                                {category.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Imagem de Capa (opcional)</label>
                <Input
                    type="file"
                    name="cover"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            handleChange('cover', '');
                            handleChange('coverPath', '');
                        }
                    }}
                />
                <p className="text-sm text-gray-500">Se não fornecer uma imagem, uma capa será gerada automaticamente com o título do livro</p>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Preço</label>
                <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleChange('price', parseFloat(e.target.value))}
                    placeholder="Preço do livro"
                    required
                    min="0"
                    step="0.01"
                />
            </div>

            <div className="flex items-center space-x-2">
                <Switch
                    id="monthly-candidate"
                    checked={formData.monthlyCandidate ?? false}
                    onCheckedChange={(checked) => handleChange('monthlyCandidate', checked)}
                />
                <label htmlFor="monthly-candidate" className="text-sm font-medium cursor-pointer">
                    Candidato a livro do mês
                </label>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Arquivo PDF do Livro</label>
                <Input
                    type="file"
                    name="pdf"
                    accept=".pdf"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && !file.type.includes('pdf')) {
                            alert('Por favor, selecione apenas arquivos PDF');
                            e.target.value = '';
                        }
                    }}
                    className="cursor-pointer"
                />
                {formData.filePath && (
                    <p className="text-sm text-gray-500">Arquivo atual: {formData.filePath.split('/').pop()}</p>
                )}
            </div>

            <Button type="submit" className="w-full">
                {isEditing ? 'Salvar Alterações' : 'Adicionar Livro'}
            </Button>
        </form>
    );
}
