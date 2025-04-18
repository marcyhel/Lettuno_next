'use client'
import { Button } from '@/components/ui/button';
import Form from "next/form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import recuperarSenhaAction from './recuperarSenhaAction';
import { useActionState } from 'react';

export default function RecuperarSenhaForm() {
    const [state, formAction, isPending] = useActionState(recuperarSenhaAction, null);

    return (
        <>
            {state?.success === true && (
                <div className="bg-green-100 border border-green-400 text-green-700 text-xs px-4 py-3 rounded mb-4" role="alert">
                    <span className="block sm:inline">Email enviado com sucesso! Verifique sua caixa de entrada.</span>
                </div>
            )}

            {state?.success === false && (
                <div className="bg-red-100 border border-red-400 text-red-700 text-xs px-4 py-3 rounded mb-4" role="alert">
                    <strong className="font-bold mr-3">Erro!</strong>
                    <span className="block sm:inline">{state?.error}</span>
                </div>
            )}

            <Form action={formAction}>
                <div>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="eu@exemplo.com"
                        required
                    />
                </div>

                <div>
                    <Button
                        className={`${isPending ? 'bg-slate-400 hover:bg-slate-400' : ''} w-full mt-6`}
                        type="submit"
                        disabled={isPending}
                    >
                        {isPending ? 'Enviando...' : 'Enviar link de recuperação'}
                    </Button>
                </div>
            </Form>
        </>
    )
}