"use client";
import Image from "next/image";
import React, { useState } from "react";

// Function to register an organization
async function registerOrganization(organizationData) {
  const response = await fetch("http://localhost:8080/organizations", {
    // Adjusted to target a backend API endpoint
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(organizationData),
  });

  if (!response.ok) {
    throw new Error("Failed to register organization");
  }

  return response.json();
}

const OrganizationPage = ({ nextStep }: { nextStep: () => void }) => {
  const [organizationName, setOrganizationName] = useState("");

  // Handles the form submission and calls the registerOrganization function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await registerOrganization({ name: organizationName });
      console.log("Organization registered:", data);
      nextStep(); // Proceed to the next step after successful registration
    } catch (error) {
      console.error("Error registering organization:", error);
    }
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
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationPage;
