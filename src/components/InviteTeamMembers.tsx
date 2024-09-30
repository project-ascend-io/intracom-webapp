'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface InviteTeamMembersProps {
  nextStep: () => void;
  prevStep: () => void;
}

const InviteTeamMembers: React.FC<InviteTeamMembersProps> = ({ prevStep }) => {
  const router = useRouter(); // Initialize useRouter

  const finishSetup = () => {
    // More logic here (if any) before redirecting
    router.push('/dashboard'); // Use router.push to navigate
  };

  return (
    <div className='rounded-lg bg-white p-8 shadow-lg'>
      <button onClick={prevStep} className='mb-4 block text-sm text-blue-600'>
        &lt; Previous
      </button>
      <h1 className='mb-4 text-2xl font-bold'>Invite your team members</h1>
      <p className='mb-6 text-gray-600'>
        Collaboration is tough by yourself. Invite a few team members using the
        invitation link below.
      </p>
      <div className='mb-4 flex items-center'>
        <input
          type='text'
          value='http://localhost:8065/signup_user_complete/?'
          readOnly
          className='w-full rounded-l-lg border border-gray-300 p-2'
        />
        <button
          className='rounded-r-lg bg-blue-600 p-2 text-white'
          onClick={() =>
            navigator.clipboard.writeText(
              'http://localhost:8065/signup_user_complete/?'
            )
          }
        >
          Copy Link
        </button>
      </div>
      <button
        className='w-full rounded-lg bg-blue-600 py-2 text-white'
        onClick={finishSetup} // Use the finishSetup function here
      >
        Finish setup
      </button>
    </div>
  );
};

export default InviteTeamMembers;
