import Image from 'next/image'
import PageContainer from "@/page-components/PageContainer"

const AboutPage = () => {
  return (
    <>
      <PageContainer className="py-24 mb-14 bg-[url('https://picsum.photos/seed/picsum/400/400')] min-w-[100vw]">
        <div className="container m-auto">
          <h2 className="text-white">About Intracom</h2>
        </div>
      </PageContainer>
      <PageContainer>
        <div className="grid grid-cols-2">
          <div className="mt-12">
            <h3 className="mb-6">The Communication Tool Built by Engineers, for Engineers</h3>
            <p>
              Intracom is an open-source communication tool designed to empower teams and highlight the skills of talented engineers. It’s more than just a product—it’s a project where engineers collaborate to create innovative solutions and build living portfolios.
            </p>
          </div>
          <div className="place-items-center">
            <img src="https://picsum.photos/seed/picsum/400/400" alt="illustration" width="400" height="400" />
          </div>
        </div>
        <div className="divider divider-primary my-12"></div>
        <div className="flex items-center min-h-screen">
          <div className="w-[80%] m-auto">
            <h2>Our Mission</h2>
            <h3>Empowering Engineers and Simplifying Communications</h3>
            <p>Intracom serves a dual purpose:</p>
            <ol>
              <li><b>For Engineers:</b> A professional-grade project to showcase skills, gain experience, and follow industry-standard practices</li>
              <li><b>For Organizations:</b> A transparent open-source communcation tool that prioritizes ease of use, real-time collaboration, and professional functionality.</li>
              <li><b>For Recruiters and Hiring Managers:</b> Aa platform to explore living portfolios of contributors, providing insight into their skills, problem-solving abilities, and real-world experience.</li>
            </ol>

          </div>
        </div>
      </PageContainer >
    </>
  )
}

export default AboutPage;
