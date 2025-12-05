'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  ForgotPasswordForm,
  ForgotPasswordFormSchema,
} from '@/app/(public)/forgot-password/types';
import AxiosApiInstance from '@/ApiInstance';
import { ResponseObject } from '@/types/http';

const ForgotPasswordPage: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(ForgotPasswordFormSchema),
  });

  const submitForgotPassword: SubmitHandler<ForgotPasswordForm> = async ({
    email,
  }: ForgotPasswordForm) => {
    console.log('Submitted: ', email);

    try {
      const response = await AxiosApiInstance.post<ResponseObject>(
        '/auth/forgot-password',
        JSON.stringify({ email: email })
      );

      console.log('Response: ', response);

      if (response.status == 200) {
        const message = response.data.message as string;
        setStatus(message);
      }
    } catch (err) {
      console.error(err?.toString());
      let message = err?.toString() + ': Please try again later.';
      message = message.replace('AxiosError: ', '');
      setError(message);
    }
  };

  const errorMessage = (
    <>
      <div role='alert' className='alert alert-error my-4'>
        {error}
      </div>
    </>
  );

  const forgotPasswordForm = (
    <>
      {error ? errorMessage : ''}
      <form onSubmit={handleSubmit(submitForgotPassword)}>
        <label className='my-4'>Email Address:</label>
        <label className='input input-bordered mt-2 flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-4 w-4 opacity-70'
          >
            <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
            <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
          </svg>
          <input
            type='email'
            className='grow'
            disabled={status ? true : false}
            placeholder='i.e. johndoe@email.com'
            {...register('email', { required: true })}
          />
        </label>
        {errors.email && (
          <span className='mt-4 text-xs text-danger-500'>
            Please provide your correct email address.
          </span>
        )}
        <button
          type='submit'
          className='btn btn-primary btn-active mt-4 w-full text-white'
          disabled={status || error ? true : false}
        >
          Submit
        </button>
      </form>
    </>
  );

  const checkEmailElement = (
    <>
      <div role='alert' className='alert alert-success'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 shrink-0 stroke-current'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>Success! {status}</span>
      </div>
      <p className='text-right text-sm'>
        Didn&apost get the email?
        <span
          className='cursor-pointer text-blue-500'
          onClick={() => setStatus(null)}
        >
          Click here
        </span>
      </p>
    </>
  );

  return (
    <>
      <div
        className='flex items-center justify-center'
        style={{ minHeight: 'inherit' }}
      >
        <div className='card my-8 w-[500px] shadow-xl'>
          <div className='card-body'>
            <p className='text-center text-lg font-bold'>Forgot Password</p>
            {status ? checkEmailElement : forgotPasswordForm}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
