import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function AuthLayout({ children }: Props) {
  return (
    <div className='w-full'>
      <div className='w-full border-b-2 border-solid'>
        <div className='container navbar md:mx-auto'>
          <a className='btn btn-ghost text-xl'>Intracom</a>
        </div>
      </div>
      <main className='container mx-auto px-4 md:px-0'>{children}</main>
    </div>
  );
}
