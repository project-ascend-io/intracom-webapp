"use client";
import Image from "next/image";
import Link from "next/link";
import react, { useState } from "react";

const ToolsUsed = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const [step, setStep] = useState(1);

  // const nextStep = () => {
  //   setStep((prev) => prev + 1);
  // };

  // const prevStep = () => {
  //   setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-start w-full mb-4">
          <button onClick={prevStep} className="text-blue-600">
            &lt; Previous
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-4">What tools do you use?</h1>
        <p className="text-gray-600 text-sm mb-6 px-24">
          Choose the tools you work with, and we'll add them to your workspace.
          Additional setup may be needed later.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-5 gap-4 mb-6">
          <div className="border p-2 w-[90px] h-[70px] rounded-lg shadow-md">
            <Image src="/github.png" alt="GitHub" width={80} height={80} />
          </div>
          <div className="border p-2 w-[90px] h-[70px] rounded-lg shadow-md">
            <Image src="/gitlab.png" alt="GitLab" width={80} height={80} />
          </div>
          <div className="border p-2 w-[90px] h-[70px] rounded-lg shadow-md">
            <Image src="/jira.png" alt="Jira" width={80} height={80} />
          </div>
          <div className="border p-2 w-[90px] h-[70px] rounded-lg shadow-md">
            <Image src="/zoom.png" alt="Zoom" width={80} height={80} />
          </div>
          <div className="border p-2 w-[90px] h-[70px] rounded-lg shadow-md">
            <Image src="/service.png" alt="ServiceNow" width={80} height={80} />
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-6 px-24">
          More tools can be added once your workspace is setup. To see all
          available integration,{" "}
          <a href="#">
            <span className="text-blue-600">visit the marketplace.</span>
          </a>
        </p>
        <div className="flex justify-between w-full max-w-sm">
          <button
            onClick={nextStep}
            className="bg-blue-600 text-white p-2 rounded-md w-full mr-2"
          >
            Continue
          </button>
          <button className="bg-gray-300 text-gray-800 p-2 rounded-md w-full ml-2">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToolsUsed;
