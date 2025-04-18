'use client'
import { Button } from '@/components/ui/button';
import Form from "next/form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import novaSenhaAction from './novaSenhaAction';
import { useActionState } from 'react';

interface NovaSenhaFormProps {
    token: string;
}

export default function NovaSenhaForm({ token }: NovaSenhaFormProps) {
    const [state, formAction, isPending] = useActionState(novaSenhaAction, null);

    return (
        <>
            {state?.success === true && (
                <div className="bg-green-100 border border-green-400 text-green-700 text-xs px-4 py-3 rounded mb-4" role="alert">
                    <span className="block sm:inline">Senha alterada com sucesso! Você já pode fazer login com sua nova senha.</span>
                </div>
            )}

            {state?.success === false && (
                <div className="bg-red-100 border border-red-400 text-red-700 text-xs px-4 py-3 rounded mb-4" role="alert">
                    <strong className="font-bold mr-3">Erro!</strong>
                    <span className="block sm:inline">{state?.error}</span>
                </div>
            )}

            <Form action={formAction}>
                <input type="hidden" name="token" value={token} />

                <div className="mb-4">
                    <Label>Nova Senha</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Digite sua nova senha"
                        required
                        minLength={6}
                    />
                </div>

                <div className="mb-6">
                    <Label>Confirme a Nova Senha</Label>
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirme sua nova senha"
                        required
                        minLength={6}
                    />
                </div>

                <div>
                    <Button
                        className={`${isPending ? 'bg-slate-400 hover:bg-slate-400' : ''} w-full`}
                        type="submit"
                        disabled={isPending}
                    >
                        {isPending ? 'Processando...' : 'Redefinir Senha'}
                    </Button>
                </div>
            </Form>
        </>
    )
}