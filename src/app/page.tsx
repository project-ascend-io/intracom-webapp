"use client";
import { useState } from 'react';

const HomePage = () => {
  const [email, setEmail] = useState('');

  const handleNotify = () => {
    // Handle notify logic here
    console.log('Notify me:', email);
  };

  return (
    <div className='flex h-screen items-center justify-center bg-black text-white'>
      <div className='text-center'>
        <div className=''>
          <h1 className='bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent'>
            Coming Soon
          </h1>
          <p className='mx-auto p-5 text-center text-lg lg:w-[70%]'>
            Intracom is an open-source internal communication tool designed to
            be economically accessible and customizable for startups,
            nonprofits, and small companies.
          </p>

          <div className='mt-8'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Please enter your email address'
              className='rounded-l-md border-none p-3 text-black outline-none'
            />
            <button
              onClick={handleNotify}
              className='rounded-r-md bg-white p-3 text-black'
            >
              Notify Me
            </button>
          </div>

          <p className='mt-4 italic'>Notify me when App is launched</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
