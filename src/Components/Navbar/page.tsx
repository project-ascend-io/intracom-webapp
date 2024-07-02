import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <main className="bg-gray-200 border-bla ">
      <nav className="flex flex-row justify-between ">
        <Link href="/" className="mt-5 ml-10">
          Intracom
        </Link>
        <ul className="flex flex-row mr-10">
          <button className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            New Chat
          </button>

          <Image
            src="/newchat.png"
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
