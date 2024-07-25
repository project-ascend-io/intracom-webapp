export default function UserInvitePage() {
    // Validate hash here

  return (
   <>
       <div className="container mx-auto md:w-9/12">
           <div className="text-center md:mb-6">
               <h1 className="mt-6 mb-2 text-xl font-bold">Welcome to Intracom</h1>
               <p>We&apos;re excited to have you join us. Let&apos;s get to know each other a little better.</p>
           </div>
           <div className="my-3 md:max-w-lg md:mx-auto">
               <div className="my-3">
                   <input type="text" placeholder="Your username"
                          className="input input-bordered w-full max-w-lg rounded-lg"/>
               </div>
               <div className="my-3">
                   <input type="email" placeholder="Your email"
                          className="input input-bordered w-full max-w-lg rounded-lg"/>
               </div>
               <div className="my-3">
                   <input type="password" placeholder="Your password"
                          className="input input-bordered w-full max-w-lg rounded-lg"/>
               </div>
               <div className="my-3">
                   <div className="form-control">
                       <label className="label justify-normal">
                           <input type="checkbox" className="checkbox checkbox-primary mr-3"/>
                           <span className="label-text">I agree to the Terms of Service and Privacy Policy</span>
                       </label>
                   </div>
               </div>
               <div className="my-3">
                   <button className="btn btn-primary rounded-lg text-white w-full">Sign up</button>
               </div>
           </div>
       </div>
   </>
  );
};
