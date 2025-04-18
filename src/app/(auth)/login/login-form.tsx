'use client'
import { Button } from '@/components/ui/button';

import Form from "next/form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import loginAction from './loginAction';
import { useActionState } from 'react';



export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(loginAction, null);

    return (
        <>
            {state?.success === false && (

                <div className=" bg-red-100 border border-red-400 text-red-700 text-xs px-4 py-3 rounded" role="alert">

                    <strong className="font-bold mr-3">Erro !</strong>
                    <span className="block sm:inline">{state?.error}</span>
                </div>
            )}
            <Form action={formAction}>

                <div>

                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="eu@exemplo.com" />
                </div>

                <div>

                    <Label>Senha</Label>
                    <Input type="password" name="password" placeholder=" ******** " />
                    <div className="text-right mt-1">
                        <a href="/recuperar-senha" className="text-xs text-gray-800 text-blue-600 hover:underline">Esqueceu a senha?</a>
                    </div>
                </div>

                <div>

                    <Button className={`${isPending ? 'bg-slate-400 hover:bg-slate-400' : ''} w-full mt-6`} type="submit">
                        Login
                    </Button>

                </div>

            </Form>
        </>
    )
}