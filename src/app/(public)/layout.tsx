import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function PublicLayout({ children }: Props) {
  return (
    <div className="w-full">
      <div className="w-full border-b-2 border-solid">
        <div className="container md:mx-auto navbar">
          <a className="btn btn-ghost text-xl">Intracom</a>
        </div>
      </div>
      <main className="container px-4 md:px-0 mx-auto">{children}</main>
    </div>
  );
}
