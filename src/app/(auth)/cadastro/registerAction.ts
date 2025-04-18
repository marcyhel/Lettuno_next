/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function registerAction(_prevState: any, formData: FormData) {
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as {
        name: string;
        email: string;
        password: string;
    };
    //valida campos
    console.log(data);
    if (!data.email || !data.name || !data.password) {
        return {
            message: 'Preencha todos os campos',
            success: false,
        }
    }
    //verifica se usuario ja existe
    const user = await db.user.findUnique({
        where: {
            email: data.email,
        }
    });

    if (user) {
        return {
            message: 'Usuário já existe!',
            success: false,
        }
    }

    //cria usuario
    await db.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hashSync(data.password),
        }
    })
    return redirect('/');
}