import Image from 'next/image';
import community_image from "@/assets/dalle-global-community.webp"

const CommunitySection = () => {
  return (
    <>
      <div id="community" className="flex items-center justify-between min-h-screen gap-6">
        <div className="grow">
          <h3>Join a Global Community of Contributors</h3>
          <p>
            Intracom is powered by engineers aim to collaboration, innovation, and building careers. Every contribution not only shapes the future of team communication but also showcases the talent and expertise of its creators.
          </p>
          <div className="w-full text-center">
            <button className="btn btn-info mt-4 rounded-md border-2 px-10 uppercase text-white w-max">
              Contribute Now
            </button>
          </div>
        </div>
        <div>
          <Image className="rounded-xl" src={community_image} alt="community" />
        </div>
      </div>
    </>
  )
}

export default CommunitySection;
