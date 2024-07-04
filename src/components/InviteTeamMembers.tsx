"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface InviteTeamMembersProps {
  nextStep: () => void;
  prevStep: () => void;
}

const InviteTeamMembers: React.FC<InviteTeamMembersProps> = ({
  nextStep,
  prevStep,
}) => {
  const router = useRouter(); // Initialize useRouter

  const finishSetup = () => {
    // More logic here (if any) before redirecting
    router.push("/dashboard"); // Use router.push to navigate
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <button onClick={prevStep} className="text-blue-600 text-sm mb-4 block">
        &lt; Previous
      </button>
      <h1 className="text-2xl font-bold mb-4">Invite your team members</h1>
      <p className="text-gray-600 mb-6">
        Collaboration is tough by yourself. Invite a few team members using the
        invitation link below.
      </p>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value="http://localhost:8065/signup_user_complete/?"
          readOnly
          className="border border-gray-300 rounded-l-lg p-2 w-full"
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-r-lg"
          onClick={() =>
            navigator.clipboard.writeText(
              "http://localhost:8065/signup_user_complete/?"
            )
          }
        >
          Copy Link
        </button>
      </div>
      <button
        className="bg-blue-600 text-white w-full py-2 rounded-lg"
        onClick={finishSetup} // Use the finishSetup function here
      >
        Finish setup
      </button>
    </div>
  );
};

export default InviteTeamMembers;
