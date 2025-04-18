// /pagamento/stripeCheckout.ts
import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server'; // se estiver usando Next.js API Route Handler


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

export async function POST(request: NextRequest) {
    try {


        // Obter o ID do plano da requisição
        const { priceId } = await request.json();

        // Usar o ID do plano fornecido ou o padrão como fallback
        const planPriceId = priceId || process.env.STRIPE_PRICE_ID;

        const checkoutSession = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: [
                {
                    quantity: 1,
                    price: planPriceId,
                },
            ],
            mode: 'subscription',
            return_url: `${request.headers.get('origin')}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
            payment_method_types: ['card'],

        });

        // Criar a assinatura no banco de dados



        return NextResponse.json({
            client_secret: checkoutSession.client_secret,
            id: checkoutSession.id
        });
    } catch (error) {
        console.error('Erro ao criar sessão do Stripe:', error);
        return NextResponse.json({ error: 'Erro ao criar sessão ' + (error) }, { status: 400 });
    }
}
