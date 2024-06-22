import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center mt-20">
      <div className="w-full   ">
        <Image
          className="lg:ml-40  md:ml-30"
          src="/landingpage.jpeg"
          alt="landing page"
          width={300}
          height={37}
          priority
        />
      </div>
      <div className="w-full pr-[40px] lg:mr-40">
        <h1 className="text-xl font-bold py-2">
          Where would you like to view this?
        </h1>
        <p className="text-sm py-3">
          You can view Mattermost in the desktop app or continue in your own web
          browser.
        </p>
        <div className="py-2 flex">
          <Link href="#">
            <button className="bg-[#0053D4] text-white text-center text-sm p-2 mr-2 rounded-md">
              View in Desktop App
            </button>
          </Link>
          {/* redirect to User sign-up page */}
          <Link href="/Signup_user_complete">
            <button className="bg-[#EAF0FB] text-[#0053D4] text-center text-sm p-2 rounded-md">
              View in Web Browser
            </button>
          </Link>
        </div>
        {/* user session history */}
        <label htmlFor="">
          <input type="checkbox" />
          <span className="text-center text-sm p-2 ">
            Remember my preference
          </span>
        </label>
        {/* link to download app */}
        <p className="text-sm py-2">
          Don't have the Desktop app?{" "}
          <a href="#" className="text-[#0053D4]">
            Download the app now
          </a>
        </p>
      </div>
    </section>
  );
}
