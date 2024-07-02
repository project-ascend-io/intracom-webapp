import React from "react";
import { FaMessage } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import SettingsDropdown from "../SettingsDropdown/page";

const LeftsideBar = () => {
  return (
    <div>
      <div className="flex flex-col h-screen me-24">
        <div className="flex flex-col">
          <button className="p-4 flex flex-row">
            <FaMessage className="mr-2 mt-1" />
            Messages
          </button>
          <button className="p-4 flex flex-row">
            <FaHashtag className="mr-2 mt-1" />
            Channels
          </button>

          {/* <button className="p-4 flex flex-row">
            <MdOutlineSettings className="mr-2 mt-1" />
            Settings
          </button> */}
          <button className="p-4 flex flex-row">
            <SettingsDropdown />
          </button>

          <button className="p-4 flex flex-row">
            <MdOutlineLogout className="mr-2 mt-1" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftsideBar;
