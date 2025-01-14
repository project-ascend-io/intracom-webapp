import PageContainer from '@/page-components/PageContainer';
import { ReactNode } from 'react';
import Navigation from '@/page-components/Navigation';
import CtaSection from '@/page-components/CtaSection';
import FooterSection from '@/page-components/FooterSection';

type Props = {
  children: ReactNode;
};
export default function PublicLayout({ children }: Props) {
  return (
    <div className='w-full'>
      <PageContainer className='sticky left-0 right-0 top-0 z-50 min-w-[100vw] bg-primary-500'>
        <Navigation />
      </PageContainer>
      <main>{children}</main>
      <PageContainer className="bg-primary-900 min-w-[100vw]">
        <CtaSection />
      </PageContainer >
      <PageContainer className="bg-primary-500 min-w-[100vw]">
        <FooterSection />
      </PageContainer>
    </div>
  );
}
