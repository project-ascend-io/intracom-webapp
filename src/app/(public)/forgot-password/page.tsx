'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ForgotPasswordForm, ForgotPasswordFormSchema } from '@/app/(public)/forgot-password/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const ForgotPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(ForgotPasswordFormSchema)
  })

  const submitForgotPassword: SubmitHandler<ForgotPasswordForm> = async ({ email }: ForgotPasswordForm) => {
    console.log('Submitted: ', email);
    const response = await fetch(`${API_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email
      })
    })
    console.log('Response: ', response);
  }

  return (
    <>
      <div className="flex justify-center items-center" style={{ minHeight: 'inherit' }}>
        <div className="card w-[500px] shadow-xl my-8">
          <div className="card-body">
            <p className="text-lg font-bold text-center">Forgot Password</p>
            <form onSubmit={handleSubmit(submitForgotPassword)}>
              <label className="my-4">
                Email Address:
              </label>
              <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" className="grow" placeholder="i.e. johndoe@email.com" {...register('email', { required: true })} />
              </label>
              {errors.email && <span className="mt-4 text-danger-500 text-xs">Please provide your correct email address.</span>}
              <button type="submit" className="btn btn-active btn-primary text-white w-full mt-4">Submit</button>
            </form >
          </div>
        </div >
      </div>
    </>
  )
}

export default ForgotPasswordPage;
