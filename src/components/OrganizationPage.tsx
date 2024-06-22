"use client";
import Image from "next/image";
import React from "react";
// import { useRouter } from "next/router";

const OrganizationPage = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  // const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // router.push("/preparing-workspace");
  };

  return (
    <div className="flex flex-row bg-gray-100 shadow-md rounded-md p-10">
      
      <div className="flex items-center justify-center mr-10">
        <Image
          src="/preporganization.png"
          alt="Organization"
          width={150}
          height={150}
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">
          What’s the name of your organization?
        </h1>
        <p className="text-gray-600 mb-6">
          We’ll use this to help personalize your workspace.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Research Corp"
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Continue
          </button>
          <button
            onClick={nextStep}
            className="bg-[#D1D5DB]  text-blue-600 text-sm  block px-4 py-2 rounded-md w-full"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationPage;
