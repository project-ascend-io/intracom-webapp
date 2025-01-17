import Image from 'next/image';
import community_image from '@/assets/dalle-global-community.webp';
import { openContributeModal } from '@/components/ContributeModal';

const CommunitySection = () => {
  return (
    <>
      <div
        id='community'
        className='flex min-h-screen items-center justify-between gap-6'
      >
        <div className='grow'>
          <h3>Join a Global Community of Contributors</h3>
          <p>
            Intracom is powered by engineers aim to collaboration, innovation,
            and building careers. Every contribution not only shapes the future
            of team communication but also showcases the talent and expertise of
            its creators.
          </p>
          <div className='w-full text-center'>
            <button
              onClick={openContributeModal}
              className='btn btn-info mt-4 w-max rounded-md border-2 px-10 uppercase text-white'
            >
              Contribute Now
            </button>
          </div>
        </div>
        <div>
          <Image className='rounded-xl' src={community_image} alt='community' />
        </div>
      </div>
    </>
  );
};

export default CommunitySection;
