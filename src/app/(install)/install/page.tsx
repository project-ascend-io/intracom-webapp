'use client';
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AdminSignUpForm, AdminSignupFormSchema } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link'

const InstallPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AdminSignUpForm>({
    resolver: zodResolver(AdminSignupFormSchema),
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const userName = watch('userName');
  const password = watch('password');

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<AdminSignUpForm> = async ({
    email,
    userName,
    password,
    organization,
    instanceUrl,
  }: AdminSignUpForm) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
        body: JSON.stringify({
          email,
          username: userName,
          password,
          organization,
          instanceUrl,
        }),
      });
      console.log(response);

      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);
        throw new Error(
          `Failed to create account: ${response.status} ${response.statusText}`
        );
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          console.log('Success:', await response.json());
          router.push('/auth/download'); // Adjust the path as needed
        } else {
          console.log('Received non-JSON response');
          const textResponse = await response.text();
          console.log('Response body:', textResponse);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex min-h-screen flex-row items-center justify-center bg-gray-50 p-12'>
      <div className='flex flex-row'>
        <div className='mr-8'>
          <h1 className='mb-2 text-4xl font-bold'>Let’s get started</h1>
          <p className='mb-8 text-gray-600'>
            Create your Intracom account to start collaborating with your team.
          </p>
        </div>
        <div className='flex flex-col'>
          <div className='w-full max-w-md rounded-lg bg-white px-8 shadow-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className='py-2 text-xl font-bold'>Create your account</h1>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Email address
                </label>
                <input
                  type='email'
                  placeholder='john@foobar.com'
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                  {...register('email')}
                />
                {errors.email && (
                  <p className='text-xs italic text-red-500'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Username
                </label>
                <input
                  type='text'
                  placeholder='Choose a Username'
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                  {...register('userName')}
                />
                {!errors.userName && userName && (
                  <label className='mb-4 text-xs text-gray-400'>
                    You can use lowercase numbers, letters, periods, dashes, and
                    underscores.
                  </label>
                )}
                {errors.userName && (
                  <p className='text-xs italic text-red-500'>
                    {errors.userName.message}
                  </p>
                )}
              </div>
              <div className='relative mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Choose a Password'
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                  {...register('password')}
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibility}
                  className='absolute'
                >
                  {showPassword ? (
                    <FiEyeOff className='relative bottom-[27px] left-[350px]' />
                  ) : (
                    <FiEye className='relative bottom-[27px] left-[350px]' />
                  )}
                </button>
                {!errors.password && password && (
                  <label className='mb-4 text-xs text-gray-400'>
                    Must be 8-64 characters long.
                  </label>
                )}
                {errors.password && (
                  <p className='text-xs italic text-red-500'>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  What’s the name of your organization?
                </label>
                <input
                  type='text'
                  placeholder='Research Corp'
                  className='w-full rounded-md border border-gray-300 p-2'
                  {...register('organization')}
                />
                {errors.organization && (
                  <p className='text-xs italic text-red-500'>
                    {errors.organization.message}
                  </p>
                )}
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Instance Url
                </label>
                <input
                  type='text'
                  placeholder='i.e. https://intracom.app'
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                  {...register('instanceUrl')}
                />
                {errors.instanceUrl && (
                  <p className='text-xs italic text-red-500'>
                    {errors.instanceUrl.message}
                  </p>
                )}
              </div>
              <button
                type='submit'
                className='my-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
              >
                Create Account
              </button>
            </form>
            <p className='mt-4 text-center text-sm text-gray-600'>
              By proceeding to create your account and use Intracom, you agree
              to our &nbsp;
              <Link className="underline text-blue-500" href="/terms-of-use">Terms of Use</Link>
              &nbsp; and &nbsp;
              <Link className="underline text-blue-500" href="/privacy-policy">Privacy Policy</Link>
              . If you do not agree, you cannot use Intracom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPage;
