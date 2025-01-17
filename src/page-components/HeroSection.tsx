import Image from 'next/image';
import reaction_image from '@/assets/intracom-reaction.png';
import { openContributeModal } from '@/components/ContributeModal';

const HeroSection = () => {
  return (
    <>
      <section className='container hero m-auto min-h-screen bg-base-200 pb-[175px]'>
        <div className='hero-content'>
          <div className='grid grid-cols-2 gap-24'>
            <div className='col-span-3 flex items-center'>
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
            <div className='col-start-5'>
              <Image
                className='max-w-xl rounded-md border-[.5px] shadow-lg'
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
