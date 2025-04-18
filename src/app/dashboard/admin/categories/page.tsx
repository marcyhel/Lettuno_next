'use client';

import { useState, useEffect } from 'react';
import { AdminCategoryForm } from '@/components/admin/admin-category-form';
import { Button } from '@/components/ui/button';

interface Category {
    id: string;
    name: string;
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);

    const fetchCategories = async () => {
        const response = await fetch('/api/categories');
        if (response.ok) {
            const data = await response.json();
            setCategories(data);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (categoryData: Partial<Category>) => {
        const url = '/api/categories';
        const method = editingCategory ? 'PUT' : 'POST';
        const body = editingCategory
            ? JSON.stringify({ id: editingCategory.id, ...categoryData })
            : JSON.stringify(categoryData);

        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body
        });

        if (response.ok) {
            await fetchCategories();
            setEditingCategory(null);
        }
    };

    const handleDelete = async (id: string) => {
        const response = await fetch('/api/categories', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });

        if (response.ok) {
            await fetchCategories();
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-2xl font-bold mb-8">Gerenciar Categorias</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <AdminCategoryForm
                        category={editingCategory || undefined}
                        onSubmit={handleSubmit}
                        isEditing={!!editingCategory}
                    />
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Categorias Existentes</h2>
                    <div className="space-y-4">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                            >
                                <span>{category.name}</span>
                                <div className="space-x-2">
                                    <Button
                                        onClick={() => setEditingCategory(category)}
                                        variant="outline"
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(category.id)}
                                        variant="destructive"
                                    >
                                        Excluir
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}