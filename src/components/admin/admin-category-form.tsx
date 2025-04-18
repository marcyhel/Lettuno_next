'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Category {
    id: string;
    name: string;
}

interface AdminCategoryFormProps {
    category?: Category;
    onSubmit: (categoryData: Partial<Category>) => Promise<void>;
    isEditing?: boolean;
}

export function AdminCategoryForm({ category, onSubmit, isEditing = false }: AdminCategoryFormProps) {
    const [formData, setFormData] = useState<Partial<Category>>(
        category || {
            name: ''
        }
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(formData);
        if (!isEditing) {
            setFormData({ name: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
                {isEditing ? 'Editar Categoria' : 'Adicionar Nova Categoria'}
            </h2>

            <div className="space-y-2">
                <label className="text-sm font-medium">Nome da Categoria</label>
                <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nome da categoria"
                    required
                />
            </div>

            <Button type="submit" className="w-full">
                {isEditing ? 'Salvar Alterações' : 'Adicionar Categoria'}
            </Button>
        </form>
    );
}