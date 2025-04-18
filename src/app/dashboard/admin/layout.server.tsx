import { AdminLayoutClient } from './components';
import { adminMiddleware } from './middleware';


export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    await adminMiddleware();
    return <AdminLayoutClient >{children}</AdminLayoutClient>;
}