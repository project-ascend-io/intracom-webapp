import React from "react";
import { SignupFormProps, UserInviteForm, UserSignUpSchema, UserSignUpSchemaType } from "@/app/(public)/user-invites/[hash]/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupForm: React.FC<SignupFormProps> = ({ invite, isLoading, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
   } = useForm<UserSignUpSchemaType>({ resolver: zodResolver(UserSignUpSchema)});

  const submitForm: SubmitHandler<UserSignUpSchemaType> = (form: UserSignUpSchemaType) => {
    const body: UserInviteForm = {
      hash: invite.hash,
      username: form.username,
      password: form.password
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
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="my-3">
            <input type="email" name="email" placeholder="Your email" value={invite.email} disabled={true}
                   className="input input-bordered w-full max-w-lg rounded-lg"/>
          </div>
          <div className="my-3">
            <input type="text" {...register('username')} placeholder="Your username"
                  className="input input-bordered w-full max-w-lg rounded-lg"/>
                        {errors.username && <span className="text-error text-xs font-medium">{errors.username.message}</span>}

          </div>
          <div className="my-3">
            <input type="password" {...register('password')} placeholder="Your password"
                   className="input input-bordered w-full max-w-lg rounded-lg"/>
                   {errors.password && <span className="text-error text-xs font-medium">{errors.password.message}</span>}
          </div>
          <div className="my-3">
            <div className="form-control">
              <label className="label justify-normal">
                <input type="checkbox" {...register('terms')} className="checkbox checkbox-primary mr-3"/>
                <span className="label-text">I agree to the Terms of Service and Privacy Policy</span>
              </label>
              {errors.terms && <span className="text-error text-xs font-medium">{errors.terms.message}</span>}
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