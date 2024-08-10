'use client'
import React from "react";
import {useParams, useRouter} from "next/navigation";
import { InviteState, UserInviteForm, UserInviteParams } from "./types";
import FeedbackForm from "@/components/feedback-form";
import InviteResponse from "@/components/invite-response";
import { useInvite } from "@/hooks/use-invites";
import SignupForm from "@/components/signup-form";
import LoadingIndicator from "@/components/loading-indicator";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const ViewUserInvitePage = () => {
    const router = useRouter();
    const params = useParams<UserInviteParams>();
    const { invite, isLoading, error, setInvite, setIsLoading } = useInvite(params);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    if (error) {
        // @todo - Leverage React ErrorBoundary or NextJS Error pages.
        return (
            <>
            <div className="container mx-auto md:w-9/12">
                  <div className="text-center mb-12 md:mb-6">
                      <h1 className="mt-6 mb-2 text-xl font-bold">{error.message}</h1>
                      {/* <p>Before completing your request, can you provide feedback on why you&apos;ve denied the
                          invitation?</p> */}
                  </div>
                  <div className="mx-auto text-center w-80">
                    <a href="/">
                        Click here to go home
                    </a>
                  </div>
              </div>
            </>
        );
    }

    if (invite?.state == InviteState.Denied) {
        const handleFeedbackSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const updateInvite = await fetch(API_URL + '/user-invites/' + invite.hash, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PATCH',
                body: JSON.stringify({ state: InviteState.Denied })
            });
            
            if (!updateInvite.ok) {
                throw new Error(`HTTP error! Status: ${updateInvite.status}`);
            }
            router.push("/");
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


    if (invite?.state == InviteState.Pending) {
        const submitInviteResponse = (hasAccepted: boolean) => {
            console.log("Responding to invite...");
            setIsLoading(true);
            
            setTimeout(() => {
                setInvite(prevInvite => prevInvite ? { ...prevInvite, state: hasAccepted ? InviteState.Accepted : InviteState.Denied } : null);
                setIsLoading(false);
            }, 750);
        }
        return <InviteResponse invite={invite} submitInviteResponse={submitInviteResponse} isLoading={isLoading} />;
    }

    if (invite?.state === InviteState.Accepted) {
        const handleSignupSubmit = async (formData: UserInviteForm) => {
            setIsLoading(true);

            const updateInvite = await fetch(API_URL + '/user-invites/' + invite.hash, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PATCH',
                body: JSON.stringify({ state: InviteState.Accepted })
            });

            if (!updateInvite.ok) {
                throw new Error(`HTTP error! Status: ${updateInvite.status}`);
            }
            const acceptedInvite = await fetch(API_URL + '/users/signup', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({
                    hash: invite.hash,
                    username: formData.username,
                    password: formData.password
                })
            });

            if (!acceptedInvite.ok) {
                throw new Error(`HTTP error! Status: ${acceptedInvite.status}`);
            }

            const data = await acceptedInvite.json();
            const userInvitation = data.responseObject;
            setInvite(userInvitation);
            console.log("200 - " + JSON.stringify(formData));
            router.push("/auth/download");
        };

        return <SignupForm invite={invite} isLoading={isLoading} onSubmit={handleSignupSubmit} />;
    }
};

const ViewUserInviteErrorBoundary = () => {
    return (
        <ViewUserInvitePage />
    )
}

export default ViewUserInviteErrorBoundary;