'use client';
import { openContributeModal } from '@/components/ContributeModal';

const CtaSection = () => {
  return (
    <>
      <div className='container m-auto py-20 text-center text-white'>
        <h3>Start Showcasing Your Skills</h3>
        <p className='m-auto w-[80%]'>
          Whether you’re an engineer eager to showcase your skills or a
          recruiter searching for proven talent, Intracom is the platform where
          contributions drive connections and careers.
        </p>
        <button
          onClick={openContributeModal}
          className='btn btn-success my-6 rounded-md border-2 px-10 uppercase text-primary-900'
        >
          Contribute Now
        </button>
        <span>
          <p>
            Are you looking for talent?{' '}
            <a href='/#contributors' className='ml-2 font-bold text-success'>
              See Contributors
            </a>
          </p>
        </span>
      </div>
    </>
  );
};

export default CtaSection;
