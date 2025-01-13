import NavLink from '@/components/NavLink';
import Image from 'next/image';
import horizontal_logo from '../assets/white-logo.png';

const Navigation = () => {
  return (
    <>
      <div className='container navbar m-auto py-4'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl text-white'>
            <Image className='mr-2' src={horizontal_logo} alt='Intracom' />{' '}
            Intracom
          </a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal items-center px-1'>
            <NavLink label='Home' hyperlink='/' />
            <NavLink label='About' hyperlink='/about' />
            <NavLink label='Community' hyperlink='/#community' />
            <NavLink label='Contributors' hyperlink='/#contributors' />
            <NavLink label='Contact' hyperlink='/contact' />
            <li className='ml-4'>
              <button className='btn btn-outline rounded-md border-2 px-10 uppercase text-white'>
                Join The Waitlist
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
