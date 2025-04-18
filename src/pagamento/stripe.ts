import { getUserSubscription } from "@/lib/wrappers/user";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";
import db from '@/lib/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

export async function fetchSubscriptionByEmail(email: string) {
    if (!email) return null;

    const customers = await stripe.customers.list({
        limit: 1,
        email: email,
        expand: ['data.subscriptions'],
    });
    if (customers.data.length === 0) {
        return null;
    }
    const customer = customers.data[0];

    if (customer.subscriptions?.data.length === 0) {
        return null;
    }

    const subscription = customer.subscriptions?.data[0];
    return subscription;
}


export async function translateSubscriptionStatus(subscriptionStatus: string) {
    switch (subscriptionStatus) {
        case 'active':
            return 'Ativo';
        case 'canceled':
            return 'Cancelado';
        default:
            return subscriptionStatus
    }
}
export async function tranlateSubscripitionInterval(interval: string) {
    switch (interval) {
        case 'month':
            return 'Mensal';
        case 'year':
            return 'Anual';
        default:
            return interval
    }
}

export async function changeSubscriptionPlanAction(email: string | undefined, newPlanPriceId: string) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');
    if (!email) {
        return null;
    }

    // Verificar assinatura atual
    const subscription = await fetchSubscriptionByEmail(email as string);
    if (!subscription) {
        return false;
    }
    const subscriptionId = subscription.id as string;

    try {
        // Atualizar a assinatura no Stripe para o novo plano
        await stripe.subscriptions.update(subscriptionId, {
            items: [{
                id: subscription.items.data[0].id,
                price: newPlanPriceId,
            }],
            proration_behavior: 'create_prorations', // Cria ajustes proporcionais para o período restante
        });

        // Obter detalhes do novo plano para atualizar o banco de dados
        const updatedSubscription = await stripe.subscriptions.retrieve(subscriptionId, {
            expand: ['items.data.price.product']
        });

        const newPlanName = updatedSubscription.items.data[0].price.nickname || 'Plano Padrão';
        const newPlanPrice = updatedSubscription.items.data[0].price.unit_amount ?
            updatedSubscription.items.data[0].price.unit_amount / 100 : null;

        // Atualizar banco de dados
        await db.user.update({
            where: { email },
            data: {
                subscriptionPlan: newPlanName,
                subscriptionPrice: newPlanPrice
            }
        });

        // Forçar verificação com o Stripe para atualizar cache
        await getUserSubscription(email);

        // Revalidar todas as rotas relevantes
        revalidatePath('/dashboard/configuration/assinatura');
        revalidatePath('/dashboard');

        return true;
    } catch (error) {
        console.error('Erro ao alterar plano de assinatura:', error);
        return false;
    }
}

export async function cancelSubscriptionAction(email: string | undefined) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');
    if (!email) {
        return null;
    }

    // Verificar assinatura atual
    const subcription = await fetchSubscriptionByEmail(email as string)
    if (!subcription) {
        return false;
    }
    const _subscriptionId = subcription.id as string;

    try {
        // Cancelar assinatura no Stripe
        await stripe.subscriptions.cancel(_subscriptionId);

        // Atualizar banco de dados e forçar verificação
        await db.user.update({
            where: { email },
            data: {
                subscriptionStatus: 'canceled',
                subscriptionPlan: 'FREE'
            }
        });

        // Forçar verificação com o Stripe para atualizar cache
        await getUserSubscription(email);

        // Revalidar todas as rotas relevantes
        revalidatePath('/dashboard/configuration/assinatura');
        revalidatePath('/dashboard');

        return true;
    } catch (error) {
        console.error('Erro ao cancelar assinatura:', error);
        return false;
    }
}
