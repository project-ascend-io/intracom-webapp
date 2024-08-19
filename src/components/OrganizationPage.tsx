'use client';
const api_url = process.env.NEXT_PUBLIC_API_URL as string;
import Image from 'next/image';
import React, { useState, FC, FormEvent } from 'react';

interface OrganizationPageProps {
  nextStep: () => void;
}

// Interface for organization data
interface OrganizationData {
  name: string;
}

// Function to register an organization
async function registerOrganization(
  organizationData: OrganizationData,
): Promise<object> {
  const response = await fetch(`${api_url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(organizationData),
  });

  if (!response.ok) {
    throw new Error('Failed to register organization');
  }

  return response.json();
}

const OrganizationPage: FC<OrganizationPageProps> = ({ nextStep }) => {
  const [organizationName, setOrganizationName] = useState<string>('');

  // Handles the form submission and calls the registerOrganization function
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await registerOrganization({ name: organizationName });
      console.log('Organization registered:', data);
      nextStep(); // Proceed to the next step after successful registration
    } catch (error) {
      console.error('Error registering organization:', error);
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
          <button
            onClick={() => {
              // To handle the no-selected tools as needed
              nextStep();
            }}
            className="bg-gray-400 text-white px-4 py-2 mt-1 rounded-md w-full"
          >
            Go to Next
          </button>
        </form>
      </div>
    </div>
  );
};
export default OrganizationPage;
