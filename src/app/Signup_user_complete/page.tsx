"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";

// import { useRouter } from "next/router";

// interface Organization {
//   name: string,
//   avatar: string,
// }

// // Admin User
// // Will have an org during the first step
// interface IUser {
//   email: string,
//   username: string,
//   organization?: string,
// }

// // Regular User
// // Will always have org because they will be invited into the org
// interface IUser {
//   email: string,
//   username: string,
//   organization?: string,
// }

const SignupUserComplete = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const response: IUser = {
    //   email: "test@gmail.com",
    //   username: "test",
    //   organization: "testing"
    // }

    const response = await fetch(
      "http://localhost:8080/user-registration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    if (!response.ok) {
      // Handle error
      console.error("Error:", response.statusText);
    } else {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        // Handle JSON
        console.log("Success:", await response.json());
        // router.push("/Preparing-workspace");
      } else {
        // Handle non-JSON (e.g. HTML)
        console.log("Received non-JSON response");
      }
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
            Create your Mattermost account to start collaborating with your
            team.
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
            <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-bold py-4">Create your account</h1>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Choose a Username"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                  pattern="^[a-z0-9_-]{3,15}$"
                  value={userName}
                  onChange={handleUserNameChange}
                />
                {userName && (
                  <label className="text-xs text-gray-400 mb-4">
                    You can use lowercase numbers, letters, periods, dashes, and
                    underscores.
                  </label>
                )}
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Choose a Password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                  pattern=".{8,64}"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                {password && (
                  <label className="text-xs text-gray-400 mb-4">
                    Must be 8-64 characters long.
                  </label>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Create Account
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">
              Interested in receiving Mattermost security, product, promotions,
              and company updates via newsletter? Sign up at{" "}
              <a
                href="https://mattermost.com/security-updates/"
                className="text-blue-600 underline"
              >
                https://mattermost.com/security-updates/
              </a>
              .
            </p>
            <p className="mt-4 text-sm text-center text-gray-600">
              By proceeding to create your account and use Mattermost, you agree
              to our{" "}
              <a
                href="https://mattermost.com/terms-of-use/"
                className="text-blue-600 underline"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="https://mattermost.com/privacy-policy/"
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
