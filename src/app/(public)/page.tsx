'use client';
import React from 'react';
import HeroSection from '@/page-components/HeroSection';
import FeatureSection from '@/page-components/FeatureSection';
import CommunitySection from '@/page-components/CommunitySection';
import ContributorSection from '@/page-components/ContributorSection';
import PageContainer from '@/page-components/PageContainer';
import ContributeModal from '@/components/ContributeModal';

const HomePage = () => {
  return (
    <>
      <PageContainer className={"min-w-[100vw]"}>
        <HeroSection />
      </PageContainer >
      <PageContainer className='mt-0'>
        <div className="divider divider-primary mt-4"><p className="text-primary uppercase">Features</p></div>
        <FeatureSection />
        <div className="divider divider-primary mb-12"></div>
        <CommunitySection />
        <ContributorSection />
        <ContributeModal />
      </PageContainer >
    </>
  );
};

export default HomePage;
