'use client';
import React from 'react';

import { useRouter } from 'next/navigation';

const SignUpSuccess = () => {
  const router = useRouter();

  const handleDashboardClick = () => {
    // Redirect to the dashboard page
    router.push('/dashboard'); // Adjust the path as needed
  };

  const redirectToDownload = () => {
    // Redirect to the dashboard page
    router.push('/auth/download'); // Adjust the path as needed
  };

  return (
    <div className='mx-auto mt-10 flex h-[360px] w-[800px] flex-col items-center bg-gray-100'>
      <div className='px-10'>
        <h1 className='py-3 text-center text-xl font-bold'>
          {' '}
          <span className='text-3xl text-purple-500'>
            Congratulations!!
          </span>{' '}
          Your account has been created successfully.{' '}
        </h1>
        <p className='px-4 py-2 text-center'>
          You&apos;re all set up and ready to go. We&apos;ve sent you a
          confirmation email. Please click the link in the email to verify your
          account.
        </p>
        {/* create a link to be sent to email and verify before proceed to dashboard */}

        <button
          onClick={handleDashboardClick}
          className='mx-1 w-1/3 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        >
          Proceed to Dashboard
        </button>
        <button
          onClick={redirectToDownload}
          className='mx-1 w-1/2 rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        >
          Click here to download the app
        </button>
      </div>
    </div>
  );
};

export default SignUpSuccess;
