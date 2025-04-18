import { redirect } from 'next/navigation';
import Navbar from './navbar';
import { auth } from 'auth';
import Footer from '@/components/footer/footer';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth();
  const username = session?.user?.name;
  if (!session) {
    return redirect('/login');
  }

  return (
    <div className=" bg-gray-100 bg-opacity-25">
      <Navbar userName={username || ''} />
      <main className="w-full flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 py-8 min-h-screen ">
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
