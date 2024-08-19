import Image from 'next/image';
import React, { useState, FC } from 'react';

interface ToolsUsedProps {
  nextStep: () => void;
  prevStep: () => void;
}

interface Tool {
  name: string;
  src: string;
}

const ToolsUsed: FC<ToolsUsedProps> = ({ nextStep, prevStep }) => {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const toggleToolSelection = (toolName: string): void => {
    setSelectedTools((prevSelectedTools) =>
      prevSelectedTools.includes(toolName)
        ? prevSelectedTools.filter((tool) => tool !== toolName)
        : [...prevSelectedTools, toolName],
    );
  };

  const tools: Tool[] = [
    { name: 'GitHub', src: '/github.png' },
    { name: 'GitLab', src: '/gitlab.png' },
    { name: 'Jira', src: '/jira.png' },
    { name: 'Zoom', src: '/zoom.png' },
    { name: 'ServiceNow', src: '/service.png' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-start w-full mb-4">
          <button onClick={prevStep} className="text-blue-600">
            &lt; Previous
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-4">What tools do you use?</h1>
        <p className="text-gray-600 text-sm mb-6 px-24">
          Choose the tools you work with, and we&apos;ll add them to your
          workspace. Additional setup may be needed later.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-5 gap-4 mb-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`border p-2 w-[90px] h-[70px] rounded-lg shadow-md ${
                selectedTools.includes(tool.name) ? 'bg-blue-300' : ''
              }`}
              onClick={() => toggleToolSelection(tool.name)}
            >
              <Image src={tool.src} alt={tool.name} width={80} height={80} />
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-6 px-24">
          More tools can be added once your workspace is setup. To see all
          available integration,{' '}
          <a href="#">
            <span className="text-blue-600">visit the marketplace.</span>
          </a>
        </p>
        <div className="flex justify-between w-full max-w-sm">
          <button
            onClick={() => {
              console.log(selectedTools); // Or handle the selected tools as needed
              nextStep();
            }}
            className="bg-blue-600 text-white p-2 rounded-md w-full mr-2"
          >
            Continue
          </button>
          <button
            onClick={() => {
              // To handle the no-selected tools as needed
              nextStep();
            }}
            className="bg-gray-300 text-gray-800 p-2 rounded-md w-full ml-2"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsUsed;
