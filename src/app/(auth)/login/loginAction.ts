/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { getUserSubscription } from "@/lib/wrappers/user";
import { signIn } from "auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export default async function loginAction(_prevState: any, formData: FormData) {
    try {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // Aguarde a função que salva os dados na session
        await getUserSubscription(email);

        // Agora sim faz login
        await signIn('credentials', {
            redirect: true,
            redirectTo: '/dashboard',
            email,
            password,
        });

        return { success: true };
    } catch (e: any) {
        if (isRedirectError(e)) throw e;
        if (e.type === 'CredentialsSignin') {
            return { success: false, error: 'Dados de login incorretos' };
        }

        console.error(e);
        return { success: false, error: 'Ops, algum erro aconteceu!' };
    }
}
