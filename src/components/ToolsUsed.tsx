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
        : [...prevSelectedTools, toolName]
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
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='flex flex-col items-center rounded-lg bg-white p-8 shadow-md'>
        <div className='mb-4 flex w-full justify-start'>
          <button onClick={prevStep} className='text-blue-600'>
            &lt; Previous
          </button>
        </div>
        <h1 className='mb-4 text-3xl font-bold'>What tools do you use?</h1>
        <p className='mb-6 px-24 text-sm text-gray-600'>
          Choose the tools you work with, and we&apos;ll add them to your
          workspace. Additional setup may be needed later.
        </p>
        <div className='md:grid-cols- mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`h-[70px] w-[90px] rounded-lg border p-2 shadow-md ${
                selectedTools.includes(tool.name) ? 'bg-blue-300' : ''
              }`}
              onClick={() => toggleToolSelection(tool.name)}
            >
              <Image src={tool.src} alt={tool.name} width={80} height={80} />
            </div>
          ))}
        </div>
        <p className='mb-6 px-24 text-sm text-gray-600'>
          More tools can be added once your workspace is setup. To see all
          available integration,{' '}
          <a href='#'>
            <span className='text-blue-600'>visit the marketplace.</span>
          </a>
        </p>
        <div className='flex w-full max-w-sm justify-between'>
          <button
            onClick={() => {
              console.log(selectedTools); // Or handle the selected tools as needed
              nextStep();
            }}
            className='mr-2 w-full rounded-md bg-blue-600 p-2 text-white'
          >
            Continue
          </button>
          <button
            onClick={() => {
              // To handle the no-selected tools as needed
              nextStep();
            }}
            className='ml-2 w-full rounded-md bg-gray-300 p-2 text-gray-800'
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsUsed;
