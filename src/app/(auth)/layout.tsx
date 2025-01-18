'use client';
import { ReactNode, useEffect, useState } from 'react';
import { checkSession } from '@/services/auth';
import { useAuth } from '@/context/auth';
import { redirect } from 'next/navigation';
import { AuthUserType } from '@/types/auth';

type Props = {
  children: ReactNode;
};
export default function AuthLayout({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useAuth();

  async function checkUserSession() {
    const data = await checkSession();

    if (data?.success) {
      if (
        typeof data.responseObject === 'object' &&
        data.responseObject !== null
      ) {
        setUser(data.responseObject as AuthUserType);
      } else {
        console.error('responseObject is not of type AuthUserType');
      }
    }

    setLoading(false);
  }
  useEffect(() => {
    if (!user) checkUserSession();
    else setLoading(false);
  }, []);

  if (loading) return;

  return user ? (
    <div className='w-full'>
      <div className='w-full border-b-2 border-solid'>
        <div className='container navbar md:mx-auto'>
          <a className='btn btn-ghost text-xl'>Intracom</a>
        </div>
      </div>
      <main className='container mx-auto px-4 md:px-0'>{children}</main>
    </div>
  ) : (
    redirect('/')
  );
}
