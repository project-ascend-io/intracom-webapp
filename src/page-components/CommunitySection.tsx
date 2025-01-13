const CommunitySection = () => {
  return (
    <>
      <div id="community" className="flex items-center justify-between min-h-screen">
        <div className="prose grow">
          <h2 className="text-4xl font-bold">Join a Global Community of Innovators</h2>
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
          <img src="https://picsum.photos/seed/picsum/400/400" alt="illustration" width={400} height={300} />
        </div>
      </div>
    </>
  )
}

export default CommunitySection;
