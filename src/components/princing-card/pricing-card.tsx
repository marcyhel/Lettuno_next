import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

import PaymentButton from './payment_button';
import { auth } from 'auth';
import { getUserSubscription } from '@/lib/wrappers/user';
import AssineButton from './change_subscription_button';

// import { fetchSubscriptionByEmail } from '@/pagamento/stripe';

type PlanProps = {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  priceId: string;
};

type SubscriptionType = {
  subscriptionId: string | null;
  subscriptionStatus: string | null;
  subscriptionPlan: string | null;
  subscriptionEndDate: Date | null;
} | null;

export const PricingPlan = ({ plan, subscription, change }: { plan: PlanProps; subscription?: SubscriptionType, change: boolean | null }) => {
  return (
    <Card className={`w-full max-w-[350px] text-left md:mt-8 mt-6 ${plan.highlighted ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader>
        <CardTitle>{plan.title}</CardTitle>
        <CardDescription>
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 mt-4">
          {plan.price}
          <span className="font-normal text-muted-foreground text-base md:text-lg">
            /mês
          </span>{' '}
        </p>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex gap-2 text-muted-foreground">
              <Check className="w-4 text-green-600 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {change ? (
          <AssineButton planId={plan.priceId} />
        ) : subscription ? null : (
          <PaymentButton planId={plan.priceId}>Assine já</PaymentButton>
        )}
      </CardFooter>

    </Card>
  );
};

export default async function PricingCard() {
  const session = await auth();
  const userEmail = session?.user?.email as string;

  const subscription = await getUserSubscription(userEmail);
  // const stripeSubscription: any = await fetchSubscriptionByEmail(userEmail);
  // console.log('subscription', subscription, stripeSubscription);
  // Define os planos com suas característica
  const plans: PlanProps[] = [
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

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-4xl mx-auto">
      {plans.map((plan) => (
        <PricingPlan key={plan.id} plan={plan} change={false} subscription={subscription} />
      ))}
    </div>
  );
}
