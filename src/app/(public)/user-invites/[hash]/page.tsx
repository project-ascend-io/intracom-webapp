'use client'
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import { Invitation, UserInviteForm } from "./types";
import FeedbackForm from "@/components/feedback-form";
import InviteResponse from "@/components/invite-response";
import { useInvite } from "@/hooks/use-invites";
import SignupForm from "@/components/signup-form";
import LoadingIndicator from "@/components/loading-indicator";

export default function ViewUserInvitePage() {
    const router = useRouter();
    const { invite, isLoading, error, setInvite, setIsLoading } = useInvite();

    if (isLoading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (invite?.state == "denied") {
        const handleFeedbackSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            // @todo submit patch request here.
        };

        return (
          <>
              <div className="container mx-auto md:w-9/12">
                  <div className="text-center mb-12 md:mb-6">
                      <h1 className="mt-6 mb-2 text-xl font-bold">Thank you for updating the invitation.</h1>
                      <p>Before completing your request, can you provide feedback on why you&apos;ve denied the
                          invitation?</p>
                  </div>
                  <div className="mx-auto w-80">
                      <FeedbackForm onSubmit={handleFeedbackSubmit} isLoading={isLoading} />
                  </div>
              </div>
          </>
        );
    }


    if (invite?.state == "pending") {
        const submitInviteResponse = (hasAccepted: boolean) => {
            console.log("Responding to invite...");
            setIsLoading(true);

            // @todo - submit patch request here
            setTimeout(() => {
                setInvite(prevInvite => prevInvite ? { ...prevInvite, state: hasAccepted ? "accepted" : "denied" } : null);
                setIsLoading(false);
            }, 3000);
        }
        return <InviteResponse invite={invite} submitInviteResponse={submitInviteResponse} isLoading={isLoading} />;
    }

    if (invite?.state === "accepted") {
        const handleSignupSubmit = (formData: UserInviteForm) => {
            setIsLoading(true);

            // @todo - submit post request here
            setTimeout(() => {
                console.log("200 - " + JSON.stringify(formData));
                router.push("/auth/download");
                // setIsLoading(false);
            }, 3000);
        };

        return <SignupForm invite={invite} isLoading={isLoading} onSubmit={handleSignupSubmit} />;
    }
};
