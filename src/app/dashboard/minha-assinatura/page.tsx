/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import PricingCard from '@/components/princing-card/pricing-card';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { tranlateSubscripitionInterval, translateSubscriptionStatus } from '@/pagamento/stripe';
import { auth } from 'auth';
import { CreditCard, XCircle } from 'lucide-react';
import Form from 'next/form';
import cancelSubscriptionAction from './cancel-subscription';
import { getUserSubscription } from '@/lib/wrappers/user';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import BannerWarning from '@/components/banner-warning';

export default async function MySubscription() {
  const session = await auth();

  // Verificar se o usuário está autenticado
  if (!session) {
    return (
      <>
        <h1 className="text-3xl font-bold mb-6">Minha Assinatura</h1>
        <BannerWarning text='Você precisa estar logado para acessar esta página.' />
        <div className="flex justify-center mt-8">
          <Link href="/login" className={cn(buttonVariants())}>
            Fazer login
          </Link>
        </div>
      </>
    );
  }

  const userEmail = session.user.email;

  const subscription = await getUserSubscription(userEmail as string);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Minha Assinatura</h1>
      <div className="w-full">
        {
          subscription ?
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <PlanCard subscription={subscription} />
              <ActionCard subscription={subscription} />
            </div>
            : <section className="md:py-12 py-8 text-center px-2" id="preco">
              <h2 className="md:text-4xl text-2xl font-bold md:mt-8">
                Preço Simples e Transparente
              </h2>
              <p className="text-gray-500 mt-4 text-sm md:text-base max-w-3xl mx-auto">
                Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
                para você? Assine o nosso plano mensal Pro Premium VIP e garanta
                mensalmente um ebook novo de programação. E por menos de um café por
                dia.
              </p>

              <div className="flex justify-center px-4 md:px-0 mt-6">
                <PricingCard />
              </div>
            </section>
        }
      </div>
    </div>
  );
}

function PlanCard({ subscription }: { subscription: any }) {
  return (
    <Card className="w-full md:max-w-md">
      <CardHeader>
        <CardTitle>Detalhes da Assinatura</CardTitle>
        <CardDescription>Informações sobre seu plano atual</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
            <span className="font-medium text-gray-600">Plano:</span>
            <span className="text-primary">{subscription.subscriptionPlan}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
            <span className="font-medium text-gray-600">Status:</span>
            <span className="text-green-600 font-medium">{translateSubscriptionStatus(subscription.subscriptionStatus)}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
            <span className="font-medium text-gray-600">Próxima cobrança:</span>
            <span>{subscription.subscriptionEndDate ? new Date(subscription.subscriptionEndDate).toLocaleDateString() : 'N/A'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ActionCard({ subscription }: { subscription: any }) {
  return (
    <Card className="w-full md:max-w-sm">
      <CardHeader>
        <CardTitle>Ações</CardTitle>
        <CardDescription>Gerencie sua assinatura</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <CreditCard className="mr-2 h-5 w-5 text-gray-400" />
            Atualizar método de pagamento
          </button>
          <Form action={cancelSubscriptionAction}>
            <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
              <XCircle className="mr-2 h-5 w-5" />
              Cancelar assinatura
            </button>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
