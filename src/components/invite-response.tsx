import React from "react";
import { Invitation } from "@/app/(public)/user-invites/[hash]/types";

interface InviteResponseProps {
  invite: Invitation;
  submitInviteResponse: (hasAccepted: boolean) => void;
  isLoading: boolean;
}

const InviteResponse: React.FC<InviteResponseProps> = ({ invite, submitInviteResponse, isLoading }) => (
  <div className="container mx-auto md:w-9/12">
    <div className="text-center mb-12 md:mb-6">
      <h1 className="mt-6 mb-2 text-xl font-bold">You&apos;ve been invited to join {invite.organization.name} on Intracom</h1>
    </div>
    <div className="my-3 w-full md:w-96 mx-auto">
      <button type="button"
              onClick={() => submitInviteResponse(true)}
              className="btn btn-primary rounded-lg text-white w-full"
              disabled={isLoading}>
        Accept
      </button>
    </div>
    <div className="text-center">
      <p>Or</p>
    </div>
    <div className="my-3 w-full md:w-96 mx-auto">
      <button type="button"
              onClick={() => submitInviteResponse(false)}
              className="btn btn-secondary rounded-lg text-white w-full"
              disabled={isLoading}>
        No, thanks.
      </button>
    </div>
  </div>
);

export default InviteResponse;