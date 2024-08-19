'use client';
import InviteTeamMembers from '@/components/InviteTeamMembers';
import OrganizationPage from '@/components/OrganizationPage';
import ToolsUsed from '@/components/ToolsUsed';
import React, { useState, FC } from 'react';

// Define the possible steps
type Step = 1 | 2 | 3;

const SignupUserComplete: FC = () => {
  const [step, setStep] = useState<Step>(1);

  const nextStep = (): void => {
    setStep((prev) => (prev < 3 ? ((prev + 1) as Step) : prev));
  };

  const prevStep = (): void => {
    setStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev));
  };

  const renderStep = (): JSX.Element => {
    switch (step) {
      case 1:
        return <OrganizationPage nextStep={nextStep} />;
      case 2:
        return <ToolsUsed nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <InviteTeamMembers nextStep={nextStep} prevStep={prevStep} />;
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

export default SignupUserComplete;
