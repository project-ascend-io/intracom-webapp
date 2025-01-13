import NavLink from "@/components/NavLink";
import Image from 'next/image'
import horizontal_logo from "../assets/white-logo.png";

const Navigation = () => {
  return (
    <>
      <div className="navbar py-4 container m-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">
            <Image className="mr-2" src={horizontal_logo} alt="Intracom" /> Intracom
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <NavLink label="Home" hyperlink="/" />
            <NavLink label="About" hyperlink="/about" />
            <NavLink label="Community" hyperlink="/about" />
            <NavLink label="Contributors" hyperlink="/contact" />
            <NavLink label="Contact" hyperlink="/contact" />
            <li className="ml-4">
              <button className="btn btn-outline uppercase border-2 text-white px-10 rounded-md">Join Waitlist</button>
            </li>
          </ul>
        </div>
      </div >
    </>
  )
}

export default Navigation;
