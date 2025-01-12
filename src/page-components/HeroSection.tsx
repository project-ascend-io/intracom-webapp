import EmailInput from "@/components/EmailInput";

const HeroSection = () => {
  const emailInput = <EmailInput />;
  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center">
            <div>
              <h2>Awesome, Clean, Powerful & Creative</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis consectetur, orci id fermentum viverra, nisi lectus commodo
              </p>
              <form>
                {emailInput}
              </form>
            </div>
          </div>
          <div>
            <span className="w-[50px]"></span>
          </div>
          <div className="grid">
            <img className="justify-self-end place-self-end" src="https://picsum.photos/seed/picsum/200/300" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
