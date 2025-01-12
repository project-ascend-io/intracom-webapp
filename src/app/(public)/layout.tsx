import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function PublicLayout({ children }: Props) {
  return (
    <div className='w-full'>
      <main>{children}</main>
    </div >
  );
}
