'use client';

import Link from 'next/link';
import { Book, ListIcon, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

function AdminSidebar({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
    const pathname = usePathname();

    const navItems = [
        {
            href: '/dashboard/admin/books',
            icon: <Book className="w-5 h-5" />,
            label: 'Livros'
        },
        {
            href: '/dashboard/admin/categories',
            icon: <ListIcon className="w-5 h-5" />,
            label: 'Categorias'
        }
    ];

    return (
        <>
            <button
                onClick={onToggle}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg  bg-white shadow-md"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <aside
                className={`fixed lg:static inset-y-0 left-0 transform  rounded ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white border-r border-gray-200 p-4 z-40`}
            >
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Admin</h2>
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
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={onToggle}
                />
            )}
        </>
    );
}

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex bg-gray-50 w-full min-h-screen rounded ">
            <AdminSidebar isOpen={isOpen} onToggle={toggleSidebar} />
            <main className="flex-1  p-4">
                {children}
            </main>
        </div>
    );
}