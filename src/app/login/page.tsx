"use client";

import React, { useState } from "react";
import Input from "@/components/input";
import { redirect } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormType, loginSchema } from "@/types/login";
import { login } from "@/services/auth";
import { useAuth } from "@/context/auth";

export default function Login() {
  const [authError, setAuthError] = useState("");
  const { user, setUser } = useAuth();

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    setAuthError("");
    const res = await login(data);

    if (res.success) {
      setUser(res.responseObject);
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
  if (user) return redirect("/auth/download");

  return (
    <section className="flex flex-col items-center p-20 w-full">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {authError && (
        <div role="alert" className="alert alert-error w-full max-w-sm my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{authError}</span>
        </div>
      )}
      <form
        className="flex flex-col gap-5 w-full max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          register={register}
          errors={errors}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          register={register}
          errors={errors}
        />
        <button className="link link-primary font-bold self-start no-underline">
          Forgot Password?
        </button>
        <button className="btn btn-primary">Login</button>
      </form>
    </section>
  );
}
