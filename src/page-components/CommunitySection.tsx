import Image from 'next/image';
import community_image from "@/assets/dalle-global-community.webp"

const CommunitySection = () => {
  return (
    <>
      <div id="community" className="flex items-center justify-between min-h-screen">
        <div className="grow">
          <h3>Join a Global Community of Innovators</h3>
          <p>
            Intracom is more than a tool—it’s a movement. Engineers from around the world collaborate to create a solution that simplifies team communication while empowering individual growth.
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
