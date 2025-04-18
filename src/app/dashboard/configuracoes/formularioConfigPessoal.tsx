'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { useSession } from 'next-auth/react';

interface FormularioConfigPessoalProps {
    initialName: string;
    userEmail: string;
}

export default function FormularioConfigPessoal({
    initialName,
    userEmail,
}: FormularioConfigPessoalProps) {
    const [name, setName] = useState(initialName);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const { update } = useSession();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail, name }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data?.error || 'Erro desconhecido');

            toast({
                title: 'Perfil atualizado',
                description: 'Seu nome de usuário foi atualizado com sucesso.',
            });

            // Atualiza a sessão com os dados mais recentes
            const updated = await update();
            console.log('Sessão atualizada:', updated); // Aqui sim estará com o novo nome
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            toast({
                variant: 'destructive',
                title: 'Erro ao atualizar usuário',
                description:
                    'Ocorreu um erro ao atualizar o nome do usuário. Tente novamente mais tarde.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        value={userEmail}
                        readOnly
                        disabled
                        className="w-full bg-gray-100"
                    />
                    <p className="text-xs text-muted-foreground">
                        O email não pode ser alterado.
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                    {isLoading ? 'Salvando...' : 'Salvar alterações'}
                </Button>
            </CardFooter>
        </form>
    );
}
