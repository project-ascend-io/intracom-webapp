import Image from 'next/image';
import reaction_image from '@/assets/intracom-reaction.png';
import { openContributeModal } from '@/components/ContributeModal';

const HeroSection = () => {
  return (
    <>
      <section className='container m-auto min-h-screen bg-base-200 pb-[175px] lg:hero md:pt-20 lg:pt-0'>
        <div className='hero-content'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-24'>
            <div className='flex items-center'>
              <div>
                <h2>Contribute. Showcase. Get Recognized.</h2>
                <p>
                  Intracom is an open-source communication tool developed by
                  engineers, for engineers. Collaborate on real-world projects,
                  showcase your contributions, and get noticed by recruitersy a
                  global community of engineers.
                </p>
                <button
                  onClick={openContributeModal}
                  className='btn btn-info mb-2 mt-4 rounded-md px-10 text-white'
                >
                  Contribute Now
                </button>
                <br />
                <span>
                  Are you looking for talent?{' '}
                  <a
                    className='text-primay-900 ml-2 font-bold'
                    href='/#contributors'
                  >
                    See Contributors
                  </a>
                </span>
              </div>
            </div>
            <div className='row-start-1 lg:row-auto'>
              <Image
                className='w-[100vw] rounded-md border-[.5px] shadow-lg md:max-w-xl'
                src={reaction_image}
                alt='intracom app'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
