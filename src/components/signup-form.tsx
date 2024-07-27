import React from "react";
import { useRouter } from "next/navigation";
import { Invitation, UserInviteForm } from "@/app/(public)/user-invites/[hash]/types";

interface SignupFormProps {
  invite: Invitation;
  isLoading: boolean;
  onSubmit: (formData: UserInviteForm) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ invite, isLoading, onSubmit }) => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const terms = formData.get("terms") === "on";

    if (!username || !password || !terms) {
      return;
    }

    const body: UserInviteForm = {
      hash: invite.hash,
      username,
      password
    };

    onSubmit(body);
  };

  return (
    <div className="container mx-auto md:w-9/12">
      <div className="text-center md:mb-6">
        <h1 className="mt-6 mb-2 text-xl font-bold">Welcome to Intracom</h1>
        <p>We&apos;re excited to have you join us. Let&apos;s get to know each other a little better.</p>
      </div>
      <div className="my-3 md:max-w-lg md:mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <input type="text" name="username" placeholder="Your username"
                   className="input input-bordered w-full max-w-lg rounded-lg"/>
          </div>
          <div className="my-3">
            <input type="email" name="email" placeholder="Your email" value={invite.email} disabled={true}
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
  );
};

export default SignupForm;