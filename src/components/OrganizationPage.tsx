"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";

const OrganizationPage = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  // const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    if (inputValue.length >= 2) {
      // Simulate fetching suggestions based on the input
      // This should be replaced with an actual API call
      const mockSuggestions = [
        "Research Corp",
        "Rapid Development Group",
        "Realistic Solutions",
        "Revolutionary Ideas",
        "Reliable Tech",
      ].filter((name) =>
        name.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // router.push("/preparing-workspace");
  };
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false); // Hide suggestions when one is clicked
  };

  return (
    <div className="flex flex-row bg-gray-100 shadow-md rounded-md p-10">
      <div className="flex items-center justify-center mr-10">
        <Image
          src="/preporganization.png"
          alt="Organization"
          width={150}
          height={150}
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">
          What’s the name of your organization?
        </h1>
        <p className="text-gray-600 mb-6">
          We’ll use this to help personalize your workspace.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Research Corp"
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="border border-gray-300 rounded-md p-2 mb-4">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="p-1 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Continue
          </button>
          <button
            onClick={nextStep}
            className="bg-[#D1D5DB] text-blue-600 text-sm block px-4 py-2 rounded-md w-full mt-2"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationPage;
