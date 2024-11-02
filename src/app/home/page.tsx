import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='mt-20 flex items-center justify-center'>
      <Image
        className='md:ml-30 w-full lg:ml-44 lg:w-1/2'
        src='/landingpage.png'
        alt='landing page'
        width={400}
        height={300}
      />

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
              View in Desktop App
            </button>
          </Link>
          {/* redirect to User sign-up page */}
          <Link href='/signup-user-complete'>
            <button className='rounded-md bg-[#EAF0FB] p-2 text-center text-sm text-[#0053D4]'>
              View in Web Browser
            </button>
          </Link>
        </div>
        {/* user session history */}
        <label htmlFor=''>
          <input type='checkbox' />
          <span className='p-2 text-center text-sm'>
            Remember my preference
          </span>
        </label>
        {/* link to download app */}
        <p className='py-4 text-sm'>
          Don&apos;t have the Desktop app?{' '}
          <a href='#' className='text-[#0053D4]'>
            Download the app now
          </a>
        </p>
      </div>
    </section>
  );
}
