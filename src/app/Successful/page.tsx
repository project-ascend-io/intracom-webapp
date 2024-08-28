"use client";
import React from "react";

import { useRouter } from "next/navigation";

const SignUpSuccess = () => {
  const router = useRouter();

  const handleDashboardClick = () => {
    // Redirect to the dashboard page
    router.push("/dashboard"); // Adjust the path as needed
  };

  const redirectToDownload = () => {
    // Redirect to the dashboard page
    router.push("/auth/download"); // Adjust the path as needed
  };

  return (
    <div className="flex flex-col mt-10 mx-auto items-center bg-gray-100 h-[360px] w-[800px]">
      <div className="px-10">
        <h1 className="text-xl font-bold py-3 text-center">
          {" "}
          <span className="text-purple-500 text-3xl">
            Congratulations!!
          </span>{" "}
          Your account has been created successfully.{" "}
        </h1>
        <p className="text-center py-2 px-4 ">
          You're all set up and ready to go. We've sent you a confirmation
          email. Please click the link in the email to verify your account.
        </p>
        {/* create a link to be sent to email and verify before proceed to dashboard */}

        <button
          onClick={handleDashboardClick}
          className="w-1/3 bg-blue-600 text-white py-2 px-4  mx-1  rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Proceed to Dashboard
        </button>
        <button
          onClick={redirectToDownload}
          className="w-1/2 bg-blue-400 text-white py-2 px-4 mx-1  rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Click here to download the app
        </button>
      </div>
    </div>
  );
};

export default SignUpSuccess;
