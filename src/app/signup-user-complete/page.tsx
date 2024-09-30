'use client';
const app_url = process.env.APP_URL as string;
const api_url = process.env.NEXT_PUBLIC_API_URL as string;
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AdminSignUpForm, AdminSignupFormSchema } from './types';
import { zodResolver } from '@hookform/resolvers/zod';

const SignupUserComplete: React.FC = () => {
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
      const response = await fetch(`${api_url}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username: userName,
          password,
          organization,
          instanceUrl,
        }),
      });

      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);
        throw new Error(
          `Failed to create account: ${response.status} ${response.statusText}`
        );
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          console.log('Success:', await response.json());
          router.push('successful');
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
    <div className='flex min-h-screen flex-row items-center justify-center bg-gray-50'>
      <div className='absolute left-4 top-4 text-blue-600'>
        <a href='/' className='text-sm'>
          Back
        </a>
      </div>
      <div className='flex flex-row items-center'>
        <div className='mr-8'>
          <h1 className='mb-2 text-4xl font-bold'>Let’s get started</h1>
          <p className='mb-8 text-gray-600'>
            Create your Intracom account to start collaborating with your team.
          </p>
          <div>
            <Image
              className='lg:ml-72'
              src='/usersignup.png'
              alt='usersignup'
              width={300}
              height={37}
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='my-4'>
            <a href='#' className='pl-40 text-sm text-blue-600'>
              Already have an account? Log in
            </a>
          </div>

          <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className='py-4 text-2xl font-bold'>Create your account</h1>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Email address
                </label>
                <input
                  type='email'
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
                  className='absolute right-3 top-1/2 -translate-y-1/2 transform'
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
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
              to our{' '}
              <a
                href={`${app_url}/terms-of-use/`}
                className='text-blue-600 underline'
              >
                Terms of Use
              </a>{' '}
              and{' '}
              <a
                href={`${app_url}/privacy-policy/`}
                className='text-blue-600 underline'
              >
                Privacy Policy
              </a>
              . If you do not agree, you cannot use Intracom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupUserComplete;
