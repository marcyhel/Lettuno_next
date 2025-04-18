import { redirect } from 'next/navigation';
import { auth } from 'auth';

export async function adminMiddleware() {
    const session = await auth();
    console.log('aaaaa', session?.user, session?.user?.role != 'ADMIN')
    if (!session) {
        return redirect('/login');
    }
    if (session?.user?.role != 'ADMIN') {
        return redirect('/dashboard');
    }
    return session;
}