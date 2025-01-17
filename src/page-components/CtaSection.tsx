'use client'
import { openContributeModal } from "@/components/ContributeModal"

const CtaSection = () => {
  return (
    <>
      <div className="container m-auto text-center text-white py-20">
        <h3>Start Showcasing Your Skills</h3>
        <p className="w-[80%] m-auto">
          Whether you’re an engineer eager to showcase your skills or a recruiter searching for proven talent, Intracom is the platform where contributions drive connections and careers.
        </p>
        <button
          onClick={openContributeModal}
          className="btn btn-success rounded-md border-2 px-10 uppercase my-6 text-primary-900">
          Contribute Now
        </button>
        <span>
          <p>Are you looking for talent? <a href="/#contributors" className="ml-2 font-bold text-success">See Contributors</a></p>
        </span>

      </div>

    </>
  )
}

export default CtaSection
