import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import Link from 'next/link';
import BannerWarning from '@/components/banner-warning';
import PricingCard from '@/components/princing-card/pricing-card';
import { auth } from 'auth';
import { getUserSubscription } from '@/lib/wrappers/user';
import { getCurrentFeaturedBook } from '@/lib/wrappers/monthly-book';

export default async function MonthlyBook() {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const subscription = await getUserSubscription(userEmail)

  const bookMonth = await getCurrentFeaturedBook();
  console.log('Livro do mês:', bookMonth);
  console.log('subscription', subscription)
  return (

    <div>
      {subscription ? null : <BannerWarning text='Para acessar o livro do mês, você precisa de uma assinatura ativa. Quer tal assinar agora?'></BannerWarning>}

      <h1 className="text-3xl font-bold mb-6">Livro do Mês</h1>
      <div className='md:flex-row flex flex-col'>
        <div className="md:w-[400px] w-full md:h-full h-[533px] aspect-[2/3] overflow-hidden bg-gray-100 shadow">
          <img src={process.env.URL_NEXT_BASE + (bookMonth?.coverPath || bookMonth?.cover)}
            alt={bookMonth?.title}
            className="w-full h-full object-cover" />
        </div>

        <div className='md:px-5 px-0 md:py-0 py-5 max-x-[400px]'>
          <p className="text-xl font-semibold mb-2">Título: {bookMonth?.title || 'Carregando...'}</p>
          <p className="text-lg mb-2">Autor: {bookMonth?.author || 'Carregando...'}</p>
          <p className="text-lg mb-2">Categoria: {bookMonth?.category.name as string || 'Carregando...'}</p>
          <p className="text-gray-600">Descrição: {bookMonth?.description || 'Carregando...'}</p>

        </div>


      </div>

      {subscription ?
        <Link

          className={cn(
            'flex items-center justify-center gap-4 mt-10 md:w-[400px] w-full md:h-full h-[533px]',
            buttonVariants()
          )}
          href={subscription ? "/livro.pdf" : "#"}
          target={subscription ? "" : "#"}
        >
          <Download className="h-4 w-4" /> Download do Pdf
        </Link> :
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

          <div className="flex justify-center">
            <PricingCard />
          </div>
        </section>
      }
    </div>


  );
}
