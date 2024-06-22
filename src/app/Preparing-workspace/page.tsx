"use client";
import InviteTeamMembers from "@/components/InviteTeamMembers";
import OrganizationPage from "@/components/OrganizationPage";
import ToolsUsed from "@/components/ToolsUsed";
import React, { useState } from "react";

const SignupUserComplete = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <OrganizationPage nextStep={nextStep} />;
      case 2:
        return <ToolsUsed nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <InviteTeamMembers prevStep={prevStep} />;
      default:
        return <OrganizationPage nextStep={nextStep} />;
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {renderStep()}
    </div>
  );
};

// const InviteTeamMembers = ({ nextStep }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//       <a href="#" className="text-blue-600 text-sm mb-4 block">
//         &lt; Previous
//       </a>
//       <h1 className="text-2xl font-bold mb-4">Invite your team members</h1>
//       <p className="text-gray-600 mb-6">
//         Collaboration is tough by yourself. Invite a few team members using the
//         invitation link below.
//       </p>
//       <div className="flex items-center mb-4">
//         <input
//           type="text"
//           value="http://localhost:8065/signup_user_complete/?"
//           readOnly
//           className="border border-gray-300 rounded-l-lg p-2 w-full"
//         />
//         <button
//           className="bg-blue-600 text-white p-2 rounded-r-lg"
//           onClick={() =>
//             navigator.clipboard.writeText(
//               "http://localhost:8065/signup_user_complete/?"
//             )
//           }
//         >
//           Copy Link
//         </button>
//       </div>
//       <button
//         className="bg-blue-600 text-white w-full py-2 rounded-lg"
//         onClick={nextStep}
//       >
//         Finish setup
//       </button>
//     </div>
//   );
// };

// const SecondStep = ({ nextStep, prevStep }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//       <h1 className="text-2xl font-bold mb-4">Second Step</h1>
//       <p className="text-gray-600 mb-6">This is the second step content.</p>

//       <button
//         className="bg-blue-600 text-white w-full py-2 rounded-lg mb-4"
//         onClick={nextStep}
//       >
//         Next
//       </button>
//       <button
//         className="bg-gray-600 text-white w-full py-2 rounded-lg"
//         onClick={prevStep}
//       >
//         Previous
//       </button>
//     </div>
//   );
// };

// const ThirdStep = ({ prevStep }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//       <h1 className="text-2xl font-bold mb-4">Third Step</h1>
//       <p className="text-gray-600 mb-6">This is the third step content.</p>
//       <button
//         className="bg-gray-600 text-white w-full py-2 rounded-lg"
//         onClick={prevStep}
//       >
//         Previous
//       </button>
//     </div>
//   );
// };

export default SignupUserComplete;
