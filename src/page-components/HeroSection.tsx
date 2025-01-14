import EmailInput from '@/components/EmailInput';

const HeroSection = () => {
  return (
    <>
      <section className='hero min-h-screen bg-base-200 pb-[175px]'>
        <div className='hero-content'>
          <div className='grid grid-cols-2 gap-24'>
            <div className='col-span-3 flex items-center'>
              <div>
                <h2>Building Connections,<br />Empowering Careers</h2>
                <p>
                  Intracom is the professional communication tool for teams,
                  created by a global community of engineers.
                </p>
                <form className="grid grid-cols-4">
                  <EmailInput classNames="col-span-2 mr-4" />
                  <button className='btn btn-success rounded-md border-2 px-10 uppercase text-white w-max'>
                    Join the waitlist
                  </button>
                </form>
                <br />
                <span>
                  Are you an engineer? <a className="text-info font-semibold" href='/organization'>Learn how to contribute</a>
                </span>
              </div>
            </div>
            <div className='col-start-5'>
              <img className="relative m-w-none" src="https://picsum.photos/seed/picsum/400/400" />
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default HeroSection;
