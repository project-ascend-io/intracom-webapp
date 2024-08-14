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
    <section className="page-container">
      <h1 className="title">Login</h1>
      {authError && <p className="error">{authError}</p>}
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
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
          helperText="Password must be at least 8 characters long and include one uppercase letter and one number"
        />
        <button className="form-button">Login</button>
      </form>
    </section>
  );
}
