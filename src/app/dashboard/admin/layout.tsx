import { adminMiddleware } from './middleware';
import { AdminLayoutClient } from './components';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    await adminMiddleware();
    return <AdminLayoutClient>{children}</AdminLayoutClient>;
}