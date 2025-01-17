'use client';
import React, { useState } from 'react';
import Input from '@/components/input';
import { redirect } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormType, loginSchema } from '@/types/login';
import { login } from '@/services/auth';
import { useAuth } from '@/context/auth';
import { AuthUserType } from '@/types/auth';

export default function Login() {
  const [authError, setAuthError] = useState('');
  const { user, setUser } = useAuth();

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    setAuthError('');
    const res = await login(data);

    if (res.success) {
      if (
        typeof res.responseObject === 'object' &&
        res.responseObject !== null
      ) {
        setUser(res.responseObject as AuthUserType);
      } else {
        console.error('responseObject is not of type AuthUserType');
      }
      reset();
    } else {
      setAuthError(res.message);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  //if existing user, redirect to dashboard
  if (user) return redirect('/auth/download');

  return (
    <section className='flex w-full flex-col items-center p-20'>
      <h1 className='mb-4 text-2xl font-bold'>Login</h1>
      {authError && (
        <div role='alert' className='alert alert-error my-4 w-full max-w-sm'>
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
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>{authError}</span>
        </div>
      )}
      <form
        className='flex w-full max-w-sm flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name='email'
          type='email'
          placeholder='Enter your email'
          register={register}
          errors={errors}
        />
        <Input
          name='password'
          type='password'
          placeholder='Enter your password'
          register={register}
          errors={errors}
        />
        <button className='link link-primary self-start font-bold no-underline'>
          Forgot Password?
        </button>
        <button className='btn btn-primary'>Login</button>
      </form>
    </section>
  );
}
