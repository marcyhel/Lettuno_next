'use client';

import Link from 'next/link';
import { User, CreditCard } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
}

function NavItem({ href, icon, label, isActive }: NavItemProps) {
    return (
        <Link
            href={href}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-100'}`}
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}

function ConfigSidebar() {
    const pathname = usePathname();

    const navItems = [
        {
            href: '/dashboard/configuracoes',
            icon: <User className="w-5 h-5" />,
            label: 'Perfil de Usuário'
        },
        {
            href: '/dashboard/configuracoes/assinatura',
            icon: <CreditCard className="w-5 h-5" />,
            label: 'Minha Assinatura'
        }
    ];

    return (
        <aside className="md:block  hidden w-64 bg-white border-r border-gray-200 p-4">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Configurações</h2>
            </div>
            <nav className="space-y-2">
                {navItems.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        isActive={pathname === item.href}
                    />
                ))}
            </nav>
        </aside>
    );
}

export default function ConfiguracoesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen lg:max-w-[70%] w-full bg-gray-50">
            <ConfigSidebar />
            <main className="flex-1 p-6 w-full overflow-auto">
                <div className="w-full mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}