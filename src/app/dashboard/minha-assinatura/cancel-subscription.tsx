'use server';

import { revalidatePath } from 'next/cache';
import { cancelUserSubscription } from '@/lib/wrappers/user';
import { auth } from 'auth';

export default async function cancelSubscriptionAction() {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Usuário não autenticado');
    }

    await cancelUserSubscription(session.user.id);
    revalidatePath('/dashboard/minha-assinatura');
}