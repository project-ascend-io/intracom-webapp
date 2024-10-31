<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='mt-20 flex items-center justify-center'>
      <Image
        className='md:ml-30 w-full lg:ml-44 lg:w-1/2'
        src='/landingpage.png'
        alt='landing page'
=======
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center mt-20">
      <Image
        className="w-full lg:ml-44 lg:w-1/2 md:ml-30 "
        src="/landingpage.png"
        alt="landing page"
>>>>>>> main
        width={400}
        height={300}
      />

<<<<<<< HEAD
      <div className='w-full pr-[40px] lg:mx-40'>
        <h1 className='py-2 text-xl font-bold'>
          Where would you like to view this?
        </h1>
        <p className='py-3 text-sm'>
          You can view Intracom in the desktop app or continue in your own web
          browser.
        </p>
        <div className='flex py-2'>
          <Link href='#'>
            <button className='mr-2 rounded-md bg-[#0053D4] p-2 text-center text-sm text-white'>
=======
      <div className="w-full pr-[40px] lg:mx-40">
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
>>>>>>> main
              View in Desktop App
            </button>
          </Link>
          {/* redirect to User sign-up page */}
<<<<<<< HEAD
          <Link href='/signup-user-complete'>
            <button className='rounded-md bg-[#EAF0FB] p-2 text-center text-sm text-[#0053D4]'>
=======
          <Link href="/signup-user-complete">
            <button className="bg-[#EAF0FB] text-[#0053D4] text-center text-sm p-2 rounded-md">
>>>>>>> main
              View in Web Browser
            </button>
          </Link>
        </div>
        {/* user session history */}
<<<<<<< HEAD
        <label htmlFor=''>
          <input type='checkbox' />
          <span className='p-2 text-center text-sm'>
=======
        <label htmlFor="">
          <input type="checkbox" />
          <span className="text-center text-sm p-2 ">
>>>>>>> main
            Remember my preference
          </span>
        </label>
        {/* link to download app */}
<<<<<<< HEAD
        <p className='py-4 text-sm'>
          Don&apos;t have the Desktop app?{' '}
          <a href='#' className='text-[#0053D4]'>
=======
        <p className="text-sm py-4">
          Don't have the Desktop app?{" "}
          <a href="#" className="text-[#0053D4]">
>>>>>>> main
            Download the app now
          </a>
        </p>
      </div>
    </section>
  );
}
