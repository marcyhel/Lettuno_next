/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { compareSync } from 'bcrypt-ts';
import db from '../db';
import { User } from '../types';
import Stripe from 'stripe';
import { fetchSubscriptionByEmail } from '@/pagamento/stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

type SubscriptionData = {
    subscriptionId: string | null;
    status: string | null;
    plan: string | null;
    price?: number | null;
    endDate?: Date | null;
};

type UserSubscription = {
    subscriptionId: string | null;
    subscriptionStatus: string | null;
    subscriptionPlan: string | null;
    subscriptionPrice: number | null;
    subscriptionEndDate: Date | null;
} | null;



export async function findUserByCredentials(
    email: string,
    password: string
): Promise<Partial<User> | null> {
    const user = await db.user.findFirst({
        where: {
            email: email,
        }
    });
    // await new Promise((resolve) => setTimeout(resolve, 500));
    if (!user) {
        return null;
    }
    console.log('user', user)

    // const subscription = await fetchSubscriptionByEmail(user.email)
    const passwordMatch = compareSync(password, user.password);
    if (passwordMatch) {
        return { email: user.email, name: user.name, role: user.role as "USER" | "ADMIN", subscriptionPlan: user.subscriptionPlan || '' };
    }
    return null
}

export async function updateUserSubscription(
    userEmail: string,
    subscriptionData: SubscriptionData
) {
    if (!userEmail) {
        throw new Error('Email do usuário é obrigatório');
    }

    try {
        return await db.user.update({
            where: { email: userEmail },
            data: {
                subscriptionId: subscriptionData.subscriptionId,
                subscriptionStatus: subscriptionData.status,
                subscriptionPlan: subscriptionData.plan,
                subscriptionPrice: subscriptionData.price ?? null,
                subscriptionEndDate: subscriptionData.endDate ?? null,
            },
        });
    } catch (error) {
        console.error('Erro ao atualizar assinatura do usuário:', error);
        throw new Error('Falha ao atualizar assinatura do usuário');
    }
}

export async function getUserSubscription(
    userEmail: string | null, cahce: boolean = false
): Promise<UserSubscription> {
    if (cahce) {

    }
    if (!userEmail) {
        return null;
    }

    try {
        // Busca dados da assinatura no banco local apenas para referência
        const user = await db.user.findUnique({
            where: { email: userEmail },
            select: {
                subscriptionId: true,
                subscriptionStatus: true,
                subscriptionPlan: true,
                subscriptionPrice: true,
                subscriptionEndDate: true,
            },
        });

        const hasLocalSubscription = !!user?.subscriptionId;

        // Sempre verificar com o Stripe para garantir dados atualizados
        // Removendo cache condicional

        // Verifica com o Stripe se necessário
        const stripeSubscription = await fetchSubscriptionByEmail(userEmail);

        // Se não encontrou assinatura no Stripe ou está cancelada
        if (!stripeSubscription || stripeSubscription.status === 'canceled') {
            // Limpa dados de assinatura no banco local se existir algum registro
            if (hasLocalSubscription) {
                await updateUserSubscription(userEmail, {
                    subscriptionId: null,
                    status: null,
                    plan: null,
                    price: null,
                    endDate: null,
                });
            }
            return null;
        }

        const priceItem = stripeSubscription.items?.data?.[0]?.price;

        const plan = priceItem?.nickname || 'Plano Padrão';
        const price = priceItem?.unit_amount ? priceItem.unit_amount / 100 : null;
        // Se encontrou assinatura ativa no Stripe, atualiza o banco local
        const updatedSubscription = {
            subscriptionId: stripeSubscription.id,
            status: stripeSubscription.status,
            plan: plan,
            price: price,
            endDate: new Date(stripeSubscription.billing_cycle_anchor * 1000)
        };

        // Atualiza o banco local com os dados do Stripe
        await updateUserSubscription(userEmail, updatedSubscription);

        // Retorna os dados atualizados
        return {
            subscriptionId: updatedSubscription.subscriptionId,
            subscriptionStatus: updatedSubscription.status,
            subscriptionPlan: updatedSubscription.plan,
            subscriptionPrice: updatedSubscription.price,
            subscriptionEndDate: updatedSubscription.endDate,
        };

    } catch (error) {
        console.error('Erro ao buscar/verificar assinatura:', error);
        return null;
    }
}


// export async function updateUserName(
//     userEmail: string,
//     newName: string
// ): Promise<Partial<User> | null> {
//     if (!userEmail) {
//         throw new Error('Email do usuário é obrigatório');
//     }

//     if (!newName || newName.trim() === '') {
//         throw new Error('Novo nome é obrigatório');
//     }

//     try {
//         const updatedUser = await db.user.update({
//             where: { email: userEmail },
//             data: { name: newName.trim() },
//             select: {
//                 email: true,
//                 name: true,
//                 role: true,
//                 subscriptionPlan: true
//             }
//         });
//         console.log('updatedUser', updatedUser)

//         return updatedUser;
//     } catch (error) {
//         console.error('Erro ao atualizar nome do usuário:', error);
//         throw new Error('Falha ao atualizar nome do usuário');
//     }
// }

export async function cancelUserSubscription(userEmail: string): Promise<boolean> {
    if (!userEmail) {
        throw new Error('Email do usuário é obrigatório para cancelar assinatura');
    }

    try {
        // Busca o usuário no banco local
        const user = await db.user.findUnique({
            where: { email: userEmail },
            select: { subscriptionId: true },
        });

        // Se não encontrou assinatura no banco local
        if (!user?.subscriptionId) {
            // Verifica se existe assinatura no Stripe
            const stripeSubscription = await fetchSubscriptionByEmail(userEmail);
            if (!stripeSubscription) {
                return false; // Não há assinatura para cancelar
            }

            // Cancela a assinatura no Stripe
            await stripe.subscriptions.cancel(stripeSubscription.id, {
                prorate: true,
            });

            // Atualiza o banco local
            await updateUserSubscription(userEmail, {
                subscriptionId: stripeSubscription.id,
                status: 'canceled',
                plan: 'FREE',
                endDate: new Date(),
            });

            return true;
        }

        // Cancela a assinatura no Stripe
        await stripe.subscriptions.cancel(user.subscriptionId, {
            prorate: true,
        });

        // Atualiza o banco local
        await updateUserSubscription(userEmail, {
            subscriptionId: user.subscriptionId,
            status: 'canceled',
            plan: 'FREE',
            endDate: new Date(),
        });

        return true;
    } catch (error) {
        console.error('Erro ao cancelar assinatura:', error);
        // Verifica se o erro é porque a assinatura já foi cancelada
        if (error instanceof Stripe.errors.StripeError && error.code === 'resource_missing') {
            // Limpa os dados de assinatura no banco local
            await updateUserSubscription(userEmail, {
                subscriptionId: null,
                status: null,
                plan: null,
                price: null,
                endDate: null,
            });
            return true; // Consideramos sucesso pois não há assinatura ativa
        }
        return false;
    }
}
export async function updateUserName(email: string, name: string) {
    return await db.user.update({
        where: { email },
        data: { name },
    });
}