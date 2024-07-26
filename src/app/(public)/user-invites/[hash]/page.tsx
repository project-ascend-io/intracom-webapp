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
    organization: string;
    state: string;
    hash: string;
}
export default function ViewUserInvitePage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('foo@bar.com');
;
    }
    /*
    1. Get hash from URL
    2. GET request to back to verify invitation is valid (not expired or deleted)  -> return inviation
    3.
     */

    const signup = (formData: FormData) => {
        setIsLoading(true);

        const username = formData.get("username");
        const email = formData.get("email");
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
                            <input type="email" name="email" placeholder="Your email" value={email} disabled={true}
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
