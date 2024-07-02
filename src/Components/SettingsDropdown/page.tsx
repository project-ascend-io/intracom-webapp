import React, { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row" onClick={() => setIsOpen(!isOpen)}>
        <MdOutlineSettings className="mr-2 mt-1" />
        Settings
      </div>

      {isOpen && (
        <div className="absolute ms-6 py-2 w-48 bg-white shadow-xl">
          <button className=" flex flex-row px-4 py-2 text-sm text-black hover:bg-gray-100 w-full text-left">
            <MdOutlineEmail className="mr-1 mt-1" />
            Email Configuration
          </button>

          {/* Add more dropdown items here */}
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
