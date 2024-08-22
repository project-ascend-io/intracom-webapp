"use client";
const api_url = process.env.NEXT_PUBLIC_API_URL as string;
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminSignUpForm, AdminSignupFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupUserComplete: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
   } = useForm<AdminSignUpForm>({ resolver: zodResolver(AdminSignupFormSchema) });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };


  const onSubmit: SubmitHandler<AdminSignUpForm> = async ({email, userName, password, organization}: AdminSignUpForm) => {
    
    try {
      const response = await fetch(`${api_url}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username: userName,
          password,
          organization,
        }),
      });

      if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        throw new Error(
          `Failed to create account: ${response.status} ${response.statusText}`
        );
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          console.log("Success:", await response.json());
          router.push("successful");
        } else {
          console.log("Received non-JSON response");
          const textResponse = await response.text();
          console.log("Response body:", textResponse);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      // setError(error.message);
    }
  };


  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-50">
      <div className="absolute top-4 left-4 text-blue-600">
        <a href="/" className="text-sm">
          Back
        </a>
      </div>
      <div className="flex flex-row items-center">
        <div className="mr-8">
          <h1 className="text-4xl font-bold mb-2">Let’s get started</h1>
          <p className="text-gray-600 mb-8">
            Create your Intracom account to start collaborating with your team.
          </p>
          <div>
            <Image
              className="lg:ml-72"
              src="/usersignup.png"
              alt="usersignup"
              width={300}
              height={37}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="my-4 ">
            <a href="#" className="text-sm text-blue-600 pl-40">
              Already have an account? Log in
            </a>
          </div>

          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-bold py-4">Create your account</h1>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Choose a Username"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  {...register("userName")}
                />
                {/* {userName && (
                  <label className="text-xs text-gray-400 mb-4">
                    You can use lowercase numbers, letters, periods, dashes, and
                    underscores.
                  </label>
                )} */}
                {errors.userName && (
                  <p className="text-red-500 text-xs italic">{errors.userName.message}</p>
                )}
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Choose a Password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                {/* {password && (
                  <label className="text-xs text-gray-400 mb-4">
                    Must be 8-64 characters long.
                  </label>
                )} */}
                {errors.password && (
                  <p className="text-red-500 text-xs italic">{errors.password.message}</p>
                )}
              </div>
              <label className="block text-sm font-medium text-gray-700">
                What’s the name of your organization?
              </label>
              <input
                type="text"
                placeholder="Research Corp"
                className="border border-gray-300 rounded-md p-2 w-full mb-4"
                {...register("organization")}
              />
                {errors.organization && (
                  <p className="text-red-500 text-xs italic">{errors.organization.message}</p>
                )}
              <p className="mt-4 text-sm  text-gray-600">
                Interested in receiving Intracom security, product, promotions,
                and company updates via newsletter? Sign up at{" "}
                <a
                  href="https://intracom.com/security-updates/"
                  className="text-blue-600 underline"
                >
                  https://intracom.com/security-updates/
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white my-4 py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Create Account
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">
              By proceeding to create your account and use Intracom, you agree
              to our{" "}
              <a
                href="https://intracom.com/terms-of-use/"
                className="text-blue-600 underline"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="https://intracom.com/privacy-policy/"
                className="text-blue-600 underline"
              >
                Privacy Policy
              </a>
              . If you do not agree, you cannot use Mattermost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupUserComplete;
