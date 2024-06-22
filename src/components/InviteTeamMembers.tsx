// import React from "react";

// const InviteTeamMembers = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//         <a href="#" className="text-blue-600 text-sm mb-4 block">
//           &lt; Previous
//         </a>
//         <h1 className="text-2xl font-bold mb-4">Invite your team members</h1>
//         <p className="text-gray-600 mb-6">
//           Collaboration is tough by yourself. Invite a few team members using
//           the invitation link below.
//         </p>
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value="http://localhost:8065/signup_user_complete/?"
//             readOnly
//             className="border border-gray-300 rounded-l-lg p-2 w-full"
//           />
//           <button
//             className="bg-blue-600 text-white p-2 rounded-r-lg"
//             onClick={() =>
//               navigator.clipboard.writeText(
//                 "http://localhost:8065/signup_user_complete/?"
//               )
//             }
//           >
//             Copy Link
//           </button>
//         </div>
//         <button className="bg-blue-600 text-white w-full py-2 rounded-lg">
//           Finish setup
//         </button>
//       </div>

//       <div className="flex justify-center items-center mt-8">
//         <div className="relative">
//           <img
//             src="/path/to/company-profile.png"
//             alt="Company Profile"
//             className="rounded-full h-24 w-24 border-4 border-white shadow-lg"
//           />
//           <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
//             UX
//           </div>
//         </div>
//         <div className="flex -space-x-4 ml-4">
//           <img
//             src="/path/to/user1.png"
//             alt="User 1"
//             className="rounded-full h-16 w-16 border-4 border-white shadow-lg"
//           />
//           <img
//             src="/path/to/user2.png"
//             alt="User 2"
//             className="rounded-full h-16 w-16 border-4 border-white shadow-lg"
//           />
//           <img
//             src="/path/to/user3.png"
//             alt="User 3"
//             className="rounded-full h-16 w-16 border-4 border-white shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InviteTeamMembers;

// NEW APPROACH>>>>>>>>>>>>>>>>>

import React from "react";
const InviteTeamMembers = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg  p-8 ">
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
        onClick={nextStep}
      >
        Finish setup
      </button>
    </div>
  );
};

export default InviteTeamMembers;
