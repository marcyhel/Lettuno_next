/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from '@/components/ui/card';

import Link from 'next/link';
import NovaSenhaForm from './nova-senha-form';
import { redirect } from 'next/navigation';
// type PageProps = {
//     params: Record<string, string>;
//     searchParams: Record<string, string | string[] | undefined>;
// }


export default async function NovaSenhaPage({ searchParams }: any) {
    const token = searchParams?.token;

    if (!token) {
        redirect('/login');
    }


    return (
        <div className='flex flex-col w-full justify-center items-center min-h-min h-[80vh] mt-0'>
            <Card className="max-w-sm w-full rounded-2xl mt-0">
                <CardHeader>
                    <h2 className="text-xl font-bold">Nova Senha</h2>
                    <CardDescription>Digite sua nova senha para continuar.</CardDescription>
                </CardHeader>
                <CardContent>
                    <NovaSenhaForm token={token as string} />
                </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-3">
                <Link className="text-gray-800 hover:underline" href="/login">
                    Voltar para login
                </Link>
            </p>
        </div>
    );
}
