'use client';

import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { CreditCard } from 'lucide-react';
import Link from 'next/link';

interface AssinaturaActionsProps {
    isActive: boolean;
    userEmail?: string;
}

export default function AssinaturaActions({ isActive, userEmail }: AssinaturaActionsProps) {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const portal_cliente = process.env.NEXT_PUBLIC_STRIPE_PORTAL_CLIENTE;

    console.log('process.env.STRIPE_PORTAL_CLIENTE ', process.env.NEXT_PUBLIC_STRIPE_PORTAL_CLIENTE)
    // const handleChangePlan = () => {
    //     setIsLoading(true);
    //     // Simulando uma chamada de API
    //     setTimeout(() => {
    //         setIsLoading(false);
    //         toast({
    //             title: 'Alteração de plano',
    //             description: 'Você será redirecionado para a página de alteração de plano.',
    //         });
    //     }, 1000);
    // };

    const handleCancelSubscription = async () => {
        try {
            console.log('handleCancelSubscription');
            setIsLoading(true);
            if (!userEmail) {
                toast({
                    title: 'Erro',
                    description: 'Usuário não identificado. Por favor, faça login novamente.',
                    variant: 'destructive'
                });
                return;
            }
            const success = await fetch('/api/cancelar_assinatura', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            // Chama a função real de cancelamento
            // const success = await cancelUserSubscription(userEmail);

            if (success) {
                toast({
                    title: 'Assinatura cancelada',
                    description: 'Sua assinatura foi cancelada com sucesso.',
                });
                // Redireciona para a página de assinatura após o cancelamento
                router.push('/dashboard');
                router.refresh();
            } else {
                toast({
                    title: 'Erro',
                    description: 'Não foi possível cancelar sua assinatura. Tente novamente mais tarde.',
                    variant: 'destructive'
                });
            }
        } catch (error) {
            console.error('Erro ao cancelar assinatura:', error);
            toast({
                title: 'Erro',
                description: 'Ocorreu um erro ao cancelar sua assinatura.',
                variant: 'destructive'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <CardFooter className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Link target='_blank' href={portal_cliente ?? ''}>
                <Button variant="outline" disabled={isLoading || !isActive}>
                    <CreditCard className="mr-2 h-5 w-5 text-gray-400" /> Atualizar método de pagamento
                </Button>
            </Link>


            <Button variant="destructive" onClick={handleCancelSubscription} disabled={isLoading || !isActive}>
                Cancelar assinatura
            </Button>
        </CardFooter>
    );
}