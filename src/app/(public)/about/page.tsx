import Image from 'next/image'
import PageContainer from "@/page-components/PageContainer"
import contribute_image from "@/assets/dalle-contribute.webp";

const AboutPage = () => {
  return (
    <>
      <PageContainer className="py-24 mb-14 bg-primary-900 min-w-[100vw]">
        <div className="container m-auto">
          <h2 className="text-white">About Intracom: Contribue. Showcase. Get Recognized.</h2>
        </div>
      </PageContainer>
      <PageContainer>
        <div className="grid grid-cols-2">
          <div className="mt-12">
            <h3 className="mb-6">An Open-Source Project Showcasing Engineering Talent</h3>
            <p>
              Intracom is more than a communication tool—it’s a project where engineers collaborate to create innovative solutions while showcasing their skills. Every contribution highlights your skills and expertise, visible to recruiters and hiring managers.
            </p>
          </div>
          <div className="place-items-center">
            <Image src={contribute_image} alt="Intracom" className="rounded-xl max-w-lg" />
          </div>
        </div>
        <div className="divider divider-primary my-12"></div>
        <div className="flex items-center min-h-screen">
          <div className="w-[80%] m-auto">
            <h2>Our Mission</h2>
            <h3>Empowering Engineers Through Open Source</h3>
            <p>Intracom is designed to help engineers:</p>
            <ol className="text-md">
              <li>
                <b>Showcase their skills:</b> Every contribution is tied to your GitHub profile, offering a transparent showcase of your skills and problem-solving abilities.
              </li>
              <li>
                <b>Gain Real-World Experience:</b> Collaborate on a professional-grade project that follows industry standards and uses cutting-edge technologies like WebSockets, Electron.js, and TypeScript.
              </li>
              <li>
                <b>Be Recognized by Recruiters:</b>Your work on Intracom helps recruiters and hiring managers discover your talent, directly tied to visible, real-world contributions.
              </li>
            </ol>

          </div>
        </div>
      </PageContainer >
    </>
  )
}

export default AboutPage;
