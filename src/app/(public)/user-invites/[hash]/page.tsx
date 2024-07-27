'use client'
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import { Invitation, UserInviteForm } from "./types";
import FeedbackForm from "@/components/feedback-form";
import InviteResponse from "@/components/invite-response";

export default function ViewUserInvitePage() {
    const router = useRouter();
    const [invite, setInvite] = useState<Invitation>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // fetch('/api/profile-data')
        //   .then((res) => res.json())
        //   .then((data) => {
        //       setInvite(data);
        //       setIsLoading(false);
        //   });
        setTimeout(() => {
            setInvite({
                _id: "random-hash",
                email: "foo@bar.com",
                organization: {
                    _id: "random-org-id",
                    name: "Letstat's Coffee Shop"
                },
                state: "pending",
                hash: "random-invite-hash"
            });
            setIsLoading(false)
        }, 1500);
    }, []);

    if (isLoading) {
        return (
          <>
              <div>Is Loading</div>
          </>
        );
    }
    const submitInviteResponse = (hasAccepted: boolean) => {
        console.log("Responding to invite...");
        setIsLoading(true);

        if (hasAccepted) {
            setTimeout(() => {
                const newInvite = {
                    ...invite,
                    state: "accepted"
                };
                setInvite(newInvite);
                setIsLoading(false);
            }, 3000);
        } else {
            setTimeout(() => {
                const newInvite = {
                    ...invite,
                    state: "denied"
                };
                setInvite(newInvite);
                setIsLoading(false);
            }, 3000);
        }
    }

    const feedback = () => {

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
        return <InviteResponse invite={invite} submitInviteResponse={submitInviteResponse} isLoading={isLoading} />;
    }

    /*
    1. Get hash from URL
    2. GET request to back to verify invitation is valid (not expired or deleted)  -> return invitation
    3.
     */

    const signup = (formData: FormData) => {
        setIsLoading(true);

        const username = formData.get("username");
        const email = invite?.email;
        const password = formData.get("password");
        const terms = formData.get("terms");

        if (!email || !username || !password || !terms) {
            return;
        }
        const body: UserInviteForm = {
            // @todo Use ZOD Validation HERE
            // @ts-ignore
            hash, username, password
        };

        // @todo Replace timeout with service call.
        setTimeout(() => {
            console.log("200 - " + JSON.stringify(body));
            router.push("/auth/download");
            setIsLoading(false);
        }, 3000);
    }

    return (
        <>
            <div className="container mx-auto md:w-9/12">
                <div className="text-center md:mb-6">
                    <h1 className="mt-6 mb-2 text-xl font-bold">Welcome to Intracom</h1>
                    <p>We&apos;re excited to have you join us. Let&apos;s get to know each other a little better.</p>
                </div>
                <div className="my-3 md:max-w-lg md:mx-auto">
                    <form action={signup}>
                        <div className="my-3">
                            <input type="text" name="username" placeholder="Your username"
                                   className="input input-bordered w-full max-w-lg rounded-lg"/>
                        </div>
                        <div className="my-3">
                            <input type="email" name="email" placeholder="Your email" value={invite?.email} disabled={true}
                                   className="input input-bordered w-full max-w-lg rounded-lg"/>
                        </div>
                        <div className="my-3">
                            <input type="password" name="password" placeholder="Your password"
                                   className="input input-bordered w-full max-w-lg rounded-lg"/>
                        </div>
                        <div className="my-3">
                            <div className="form-control">
                                <label className="label justify-normal">
                                    <input type="checkbox" name="terms" className="checkbox checkbox-primary mr-3"/>
                                    <span className="label-text">I agree to the Terms of Service and Privacy Policy</span>
                                </label>
                            </div>
                        </div>
                        <div className="my-3">
                            <button type="submit" disabled={isLoading}
                                    className="btn btn-primary rounded-lg text-white w-full">
                                <span hidden={isLoading}>Sign up</span>
                                <span hidden={!isLoading}>Signing up...</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
