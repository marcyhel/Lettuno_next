import PricingCard from '@/components/princing-card/pricing-card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Check, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from './assets/logo.svg';
import womanImg from './assets/woman.svg';
import readerImg from './assets/reader.png';
import { auth } from 'auth';

import { getUserSubscription } from '@/lib/wrappers/user';


export default async function Home() {

  const session = await auth();
  const userEmail = session?.user?.email as string;

  const subscription = await getUserSubscription(userEmail);
  return (
    <main>
      <section className="container mx-auto text-center pb-20 px-5 md:px-0">
        <nav className="flex justify-between items-center py-4 px-1">
          <Image src={logo} alt="Logotipo" className='w-32' />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon size={24} className="md:hidden cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a href={'/#funcionamento'}>
                <DropdownMenuItem>Funcionamento</DropdownMenuItem>
              </a>
              <DropdownMenuItem>Preço</DropdownMenuItem>
              <DropdownMenuItem>
                {
                  session ?
                    <Link href="/dashboard">
                      <Button variant={'bg-white'}>Dashboard</Button>
                    </Link>
                    : <Link href="/login">
                      <Button variant={'bg-white'}>Login</Button>
                    </Link>
                }
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="items-center gap-1 hidden md:flex">
            <Link href={'#funcionamento'}>
              <Button variant={'link'}>Funcionamento</Button>
            </Link>
            <Link href={'#preco'}>
              <Button variant={'link'}>Preço</Button>
            </Link>
            {
              session ?
                <Link href="/dashboard">
                  <Button variant={'bg-white'}>Dashboard</Button>
                </Link>
                : <Link href="/login">
                  <Button variant={'bg-white'}>Login</Button>
                </Link>
            }

          </div>
        </nav>
        <h1 className="md:text-6xl text-2xl font-bold mt-8 md:mt-16">
          Simplifique Seus Estudos com Lettuno
          {/* <SplitText
            text="Simplifique Seus Estudos com Lettuno"
            className="text-2xl font-semibold text-center"
            delay={100}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeInOutCubic"
            threshold={1}
            rootMargin="-50px"

          /> */}
          {/* <div className='flex justify-center'>
            <div className='flex w-[500px]  mt-5'>
              <div className='mr-5'>Mais </div>
              <RotatingText
                texts={['Reactaaaaa', 'Bitsaaaaaa', 'Isaaaaaa', 'Cool!aaaaaaaa']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg bg-black "
                staggerFrom={"first"}
                initial={{ y: "100%" }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%" }}
                animatePresenceMode={"wait"}
                staggerDuration={0.025}

                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                animatePresenceInitial={false}

                rotationInterval={5000}

              /></div>
          </div> */}


        </h1>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
          receba todos os meses um ebook novo de programação.
        </p>
        <form className="md:mt-16 mt-10">
          <div className="flex gap-2 justify-center">
            <Input
              placeholder="Coloque seu email"
              type="text"
              className="max-w-sm border-gray-300 border"
            />
            <Button>Assine Agora</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Fique por dentro. Sem spam, sem compromisso.{' '}
          </p >
          <p className="text-xs text-muted-foreground mt-2">Assine nossa newsletter.</p>
          <p className="text-xs text-muted-foreground mt-2">Cancele quando quiser.</p>
        </form>
      </section>
      <section className="bg-white md:py-16 py-8" id="funcionamento">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Como funciona?
          </h2>
          <div className="mx-24 xl:mx-80 flex flex-col max-w-[100vw] md:flex-row items-center justify-between">
            <Image
              src={readerImg}
              alt="Mulher carregando caixas"
              className="max-w-xs"
            />

            <ul className="md:text-2xl text-lg text-muted-foreground md:max-w-[40vw] max-w-[100vw]  space-y-4 md:space-y-6 flex-shrink-0">
              <li className="flex items-center justify-between gap-4">
                Novos ebooks todo mes{' '}
                <Check size={24} className="text-green-600" />
              </li>
              <li className="flex gap-2 text-muted-foreground  items-center justify-between text-wrap">
                Galeria com mais de 1000 ebooks
                <Check size={24} className="text-green-600" />
              </li>
              <li className="flex items-center justify-between gap-4">
                Cancele quando quiser
                <Check size={24} className="text-green-600" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:py-16 py-8 text-center px-2" id="preco">
        <h2 className="md:text-6xl text-2xl font-bold md:mt-16">
          Preço Simples e Transparente
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? Assine os nossos planos mensais Básico ou Premium e garanta
          mensalmente um ebook novo e tenha acosso a centenas de outros. E por menos de um café por
          dia.
        </p>

        <div className="flex justify-center px-4 md:px-0">
          <PricingCard />
        </div>
      </section>
      {
        subscription ? null :
          <section className="bg-white md:py-16 py-10 text-center">
            <div className='flex flex-col w-full justify-center items-center'>
              <div className=''>
                <h2 className="md:text-6xl text-2xl font-bold md:mt-16">
                  Pronto Para Mudar Sua Vida?
                </h2>
                <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
                  Faça como milhares de outras pessoas. Assine nosso produto e tenha
                  garantido seus estudos{' '}
                </p>
                <Link href={'#preco'}>
                  <Button className="mt-14 w-96">Assine Agora</Button>
                </Link>

                <p className="text-xs text-muted-foreground mt-2">
                  Comece sua assinatura agora mesmo. Cancele quando quiser.{' '}
                </p>
              </div>
              <Image
                src={womanImg}
                alt="Mulher carregando caixas"
                className="max-w-xs "
              />
            </div>


          </section>
      }
      <footer className="mt-16 border-t border-gray-300 pt-10 bg-white text-center p-3">
        <Image src={logo} alt="Logotipo" className="mx-auto w-32" />
        <p className="text-muted-foreground">
          © 2025 Lettuno. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
