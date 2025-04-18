/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { auth } from 'auth';
import { getUserSubscription } from '@/lib/wrappers/user';
import AssinaturaActions from './assinatura-actions';
import PricingCard, { PricingPlan } from '@/components/princing-card/pricing-card';




export default async function AssinaturaPage() {
    // Obtendo os dados da assinatura do usuário de forma assíncrona
    const session = await auth();
    const userEmail = session?.user?.email as string;
    const userSubscription = await getUserSubscription(userEmail);
    const plans: any[] = [
        {
            id: 'basic',
            title: 'Plano Básico',
            description: 'Ideal para iniciantes',
            price: 'R$4,90',
            priceId: process.env.STRIPE_PRICE_ID_BASIC || '',
            features: [
                'Acesso a 1 ebook novo por mês',
                'Galeria com 1000 ebooks',
                'Cancele quando quiser'
            ]
        },
        {
            id: 'premium',
            title: 'Plano Premium',
            description: 'Tudo que você precisa para seus estudos',
            price: 'R$9,90',
            priceId: process.env.STRIPE_PRICE_ID_PREMIUM || '',
            highlighted: true,
            features: [
                'Acesso a 1 ebook novo por mês',
                'Galeria com mais de 1000 ebooks',
                'Arquive seus pdf',
                'Gerenciador de leitura',
                'Cancele quando quiser',
                'Suporte prioritário'
            ]
        }
    ];

    // const userSubscription = null
    console.log('userSubscription', userSubscription);
    // Formatando os dados da assinatura para exibição
    const subscription = {
        status: userSubscription?.subscriptionStatus ? 'active' : 'inactive',
        plan: userSubscription?.subscriptionPlan || 'Nenhum',
        renewalDate: userSubscription?.subscriptionEndDate ? new Date(userSubscription?.subscriptionEndDate).toLocaleDateString('pt-BR') : '-',
        price: userSubscription?.subscriptionPrice ? userSubscription?.subscriptionPrice : '-'
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Minha Assinatura</h1>
                <p className="text-muted-foreground mt-2">Gerencie sua assinatura e informações de pagamento.</p>
            </div>
            {userSubscription ?
                <><Card>
                    <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                                <CardTitle>Detalhes da Assinatura</CardTitle>
                                <CardDescription>
                                    Informações sobre seu plano atual.
                                </CardDescription>
                            </div>
                            <Badge variant={subscription.status === 'active' ? 'default' : 'destructive'}>
                                {subscription.status === 'active' ? 'Ativa' : 'Inativa'}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                            <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Plano</h3>
                                <p className="text-lg font-semibold">Lettuno - {subscription.plan}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Preço</h3>
                                <p className="text-lg font-semibold">R$ {parseFloat(subscription.price as string).toFixed(2)}</p>
                            </div>
                            <div className="sm:col-span-2">
                                <h3 className="text-sm font-medium text-muted-foreground">Data da assinatura</h3>
                                <p className="text-lg font-semibold">{subscription.renewalDate}</p>
                            </div>
                        </div>

                        <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Importante</AlertTitle>
                            <AlertDescription>
                                Você pode cancelar sua assinatura a qualquer momento. O acesso permanecerá ativo até o final do período pago.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                    <AssinaturaActions isActive={subscription.status === 'active'} userEmail={userEmail} />

                </Card>
                    {session?.user.subscriptionPlan !== 'Premium' ?
                        <PricingPlan plan={plans[1]} change={true} ></PricingPlan> :
                        null
                    }


                    {/* <Card>
                        <CardHeader>
                            <CardTitle>Histórico de pagamentos</CardTitle>
                            <CardDescription>
                                Visualize seus pagamentos anteriores.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="p-4">
                                    <p className="text-sm text-muted-foreground">Nenhum pagamento encontrado.</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" asChild>
                                <Link href="#">Baixar recibos</Link>
                            </Button>
                        </CardFooter>
                    </Card> */}
                </> :
                <section className="md:py-16 py-8 text-center px-2" id="preco">
                    <h2 className="md:text-6xl text-2xl font-bold md:mt-16">
                        Preço Simples e Transparente
                    </h2>
                    <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
                        Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
                        para você? Assine os nosso plano mensais Básico ou Premium e garanta
                        mensalmente um ebook novo e tenha acosso a centenas de outros. E por menos de um café por
                        dia.
                    </p>

                    <div className="flex justify-center px-4 md:px-0">
                        <PricingCard />
                    </div>
                </section>
            }

        </div>
    );
}