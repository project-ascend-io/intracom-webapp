'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";

type UserInviteForm = {
    email: string;
    username: string;
    password: string;
}

type Invitation = {
    _id: string;
    email: string;
    organization: {
        _id: string;
        name: string;
    };
    state: string;
    hash: string;
}

export default function ViewUserInvitePage() {
    const dummyInvite: Invitation = {
        _id: "random-hash",
        email: "foo@bar.com",
        organization: {
            _id: "random-org-id",
            name: "Letstat's Coffee Shop"
        },
        state: "pending",
        hash: "random-invite-hash"
    }

    const router = useRouter();
    const [invite, setInvite] = useState<Invitation>(dummyInvite);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
        return (
          <>
              <div className="container mx-auto md:w-9/12">
                  <div className="text-center mb-12 md:mb-6">
                      <h1 className="mt-6 mb-2 text-xl font-bold">Thank you updating the invitation.</h1>
                      <p>Before completing your request, can you provide feedback on why you&apos;ve denied the invitation?</p>
                  </div>
                  <form action={feedback}>
                      <div className="my-2">
                          <label className="flex items-center">
                              <input type="radio" name="reason" value="organization" className="radio mx-3" />
                              <span>I don&apos;t know the organization.</span>
                          </label>
                      </div>
                      <div className="my-2">
                          <label className="flex items-center">
                              <input type="radio" name="reason" value="interest" className="radio mx-3" />
                              <span>I&apos;m not interested joining Intacom.</span>
                          </label>
                      </div>
                      <div className="my-2">
                          <label className="flex items-center">
                              <input type="radio" name="reason" value="other" className="radio mx-3" />
                              <span>Other</span>
                          </label>
                      </div>
                      <div className="my-4">
                          <button type="submit"
                                  className="btn btn-error rounded-lg text-white"
                                  disabled={isLoading}>
                              Deny Invitation
                          </button>
                      </div>
                  </form>
              </div>
          </>
        );
    }

    if (invite?.state == "pending") {
        return (
          <>
              <div className="container mx-auto md:w-9/12">
                  <div className="text-center mb-12 md:mb-6">
                      <h1 className="mt-6 mb-2 text-xl font-bold">You&apos;ve been invited to
                          join {invite?.organization.name} on Intracom</h1>
                  </div>
                  <div className="my-3 w-full md:w-96 mx-auto">
                      <button type="submit"
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
                      <button type="submit"
                              onClick={() => submitInviteResponse(false)}
                              className="btn btn-secondary rounded-lg text-white w-full"
                              disabled={isLoading}>
                          No, thanks.
                      </button>
                  </div>
              </div>
          </>
        );
    }

    /*
    1. Get hash from URL
    2. GET request to back to verify invitation is valid (not expired or deleted)  -> return inviation
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
            email, username, password
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
