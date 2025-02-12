import PageContainer from '@/page-components/PageContainer';
import { ReactNode } from 'react';
import Navigation from '@/page-components/Navigation';
import CtaSection from '@/page-components/CtaSection';
import FooterSection from '@/page-components/FooterSection';
import ContributeModal from '@/components/ContributeModal';

type Props = {
  children: ReactNode;
};
export default function PublicLayout({ children }: Props) {
  return (
    <div className='w-full'>
      <PageContainer className='sticky left-0 right-0 top-0 z-50 min-w-[100vw] bg-primary-500'>
        <Navigation />
      </PageContainer>
      <main className="md:min-h-[60vh]">{children}</main>
      <PageContainer className='min-w-[100vw] bg-primary-900'>
        <CtaSection />
      </PageContainer>
      <PageContainer className='min-w-[100vw] bg-primary-500'>
        <FooterSection />
      </PageContainer>
      <ContributeModal />
    </div>
  );
}
