'use client';
import NavLink from '@/components/NavLink';
import Image from 'next/image';
import horizontal_logo from '../assets/white-logo.png';
import { openContributeModal } from '@/components/ContributeModal';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth';

const Navigation = () => {
  const { user } = useAuth();
  const router = useRouter();

  let isLoggedIn = !!user;

  let unauthButtons = (
    <>
      <NavLink label='Login' hyperlink='/login' />
      <li className='ml-4'>
        <button
          onClick={openContributeModal}
          className='btn btn-outline rounded-md border-2 px-10 uppercase text-white'
        >
          Contribute Now
        </button>
      </li>
    </>
  )

  let authButtons = (
    <>
      <li className='ml-4'>
        <button
          onClick={() => router.push('/auth/download')}
          className='btn btn-outline rounded-md border-2 px-10 uppercase text-white'
        >
          Download
        </button>
      </li>
    </>
  )

  let mobileUnauthButtons = (
    <>
      <li>
        <a href='/login'>Login</a>
      </li>
      <li>
        <a>
          <button
            onClick={openContributeModal}
            className='btn btn-outline btn-info w-fit rounded-md border-2 px-4 uppercase text-white'
          >
            Contribute Now
          </button>
        </a>
      </li>
    </>
  )

  let mobileAuthButtons = (
    <>
      <li>
        <a>
          <button
            onClick={() => router.push('/auth/download')}
            className='btn btn-outline btn-info w-fit rounded-md border-2 px-4 uppercase text-white'
          >
            Download
          </button>
        </a>
      </li>
    </>
  )


  return (
    <>
      <div className='lg:container-lg container-xl navbar m-auto py-4'>
        <div className='flex-1'>
          <a href='/' className='btn btn-ghost text-xl text-white'>
            <Image className='mr-2' src={horizontal_logo} alt='Intracom' />
            <span className='hidden lg:block'>Intracom</span>
          </a>
        </div>
        <div className='hidden md:block md:flex-none'>
          <ul className='menu menu-horizontal items-center px-1'>
            <NavLink label='Home' hyperlink='/' />
            <NavLink label='About' hyperlink='/about' />
            <NavLink label='Community' hyperlink='/#community' />
            <NavLink label='Contributors' hyperlink='/#contributors' />
            {isLoggedIn ? authButtons : unauthButtons}
          </ul>
        </div>
        <div className='flex-none md:hidden'>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-circle btn-ghost text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block h-5 w-5 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
            >
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/#community'>Community</a>
              </li>
              <li>
                <a href='/#contributors'>Contributor</a>
              </li>
              {isLoggedIn ? mobileAuthButtons : mobileUnauthButtons}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
