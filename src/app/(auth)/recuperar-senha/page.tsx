import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from '@/components/ui/card';

import Link from 'next/link';
import RecuperarSenhaForm from './recuperar-senha-form';

export default function RecuperarSenhaPage() {
    return (
        <>
            <Card className="max-w-sm w-full rounded-2xl mt-12 ">
                <CardHeader>
                    <h2 className="text-xl font-bold">Recuperar Senha</h2>
                    <CardDescription>Informe seu email para receber um link de recuperação.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RecuperarSenhaForm />
                </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-3">
                Lembrou sua senha?{' '}
                <Link className="text-gray-800 hover:underline" href="/login">
                    Voltar para login
                </Link>
                .
            </p>
        </>
    );
}