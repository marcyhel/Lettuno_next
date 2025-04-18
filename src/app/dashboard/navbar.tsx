'use client';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils';
import { User, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Form from 'next/form';
import logoutAction from '../(auth)/(logout)/logoutAction';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function Navbar({ userName }: { userName: string }) {
  const pathname = usePathname();
  const { update } = useSession();
  useEffect(() => {
    update();
  }, []);
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              <Logo />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/dashboard">
                    <Button
                      variant={'link'}
                      className={cn(
                        'w-full justify-start',
                        pathname === '/dashboard' ? 'underline' : ''
                      )}
                    >
                      Livro do Mês
                    </Button>
                  </Link>
                  <Link href="/dashboard/galeria">
                    <Button
                      variant={'link'}
                      className={cn(
                        'w-full justify-start',
                        pathname === '/dashboard/galeria' ? 'underline' : ''
                      )}
                    >
                      Galeria de Livros
                    </Button>
                  </Link>


                  <div className="pt-4">
                    <div className="font-light uppercase text-xs mb-2">{userName}</div>
                    <Link href="/dashboard/configuracoes/assinatura">
                      <Button
                        variant={'link'}
                        className={cn(
                          'w-full justify-start',
                          pathname === '/dashboard/configuracoes/assinatura' ? 'underline' : ''
                        )}
                      >
                        Minha Assinatura
                      </Button>
                    </Link>
                    <Link href="/dashboard/configuracoes">
                      <Button
                        variant={'link'}
                        className={cn(
                          'w-full justify-start',
                          pathname === '/dashboard/configuracoes' ? 'underline' : ''
                        )}
                      >
                        Configurações
                      </Button>
                    </Link>

                    <Form action={logoutAction}>
                      <Button variant="ghost" className="w-full justify-start">
                        Logout
                      </Button>
                    </Form>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
              <Button
                variant={'link'}
                className={cn(pathname === '/dashboard' ? 'underline' : '')}
              >
                Livro do Mês
              </Button>
            </Link>
            <Link href="/dashboard/galeria" className="text-gray-700 hover:text-gray-900">
              <Button
                variant={'link'}
                className={cn(pathname === '/dashboard/galeria' ? 'underline' : '')}
              >
                Galeria de Livros
              </Button>
            </Link>


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-700 hover:text-gray-900">
                  <User size={24} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-4">
                <DropdownMenuLabel className="font-light uppercase text-xs">
                  {userName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/configuracoes"
                    className="text-gray-700 hover:text-gray-900  "
                  >
                    Configurações
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Form action={logoutAction}>
                    <button>Logout</button>
                  </Form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
