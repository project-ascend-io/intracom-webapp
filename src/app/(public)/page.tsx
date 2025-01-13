'use client';
import React from 'react';
import Navigation from '@/page-components/Navigation';
import HeroSection from '@/page-components/HeroSection';
import FeatureSection from '@/page-components/FeatureSection';
import FooterSection from '@/page-components/FooterSection';
import PageContainer from '@/page-components/PageContainer';

const HomePage = () => {
  return (
    <>
      <PageContainer className='sticky left-0 right-0 top-0 z-50 min-w-[100vw] bg-primary-500'>
        <Navigation />
      </PageContainer>
      <PageContainer className='mt-0'>
        <HeroSection />
        <FeatureSection />
        <FooterSection />
      </PageContainer>
    </>
  );
};

export default HomePage;
