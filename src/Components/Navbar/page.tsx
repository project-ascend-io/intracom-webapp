import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFolder } from "react-icons/fa6";

const Navbar = () => {
  return (
    <main className=" border-b-2 border-gray-200 ">
      <nav className="flex flex-row justify-between ">
        <Link href="/" className="mt-5 ml-10 flex flex-row text-2xl">
          <FaFolder className="mt-1 me-2" />
          Intracom
        </Link>
        <ul className="flex flex-row mr-10">
          <button className="m-2 p-2 bg-blue-400 text-white text-center rounded-lg hover:bg-blue-600">
            New Chat
          </button>

          <Image
            src="/profile2.jpg"
            width={30}
            height={20}
            alt="Profile"
            className="m-3 mr-10 rounded-full"
          />
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
