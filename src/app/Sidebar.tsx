import React from "react"
import { FaMessage,} from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";


const Sidebar = () => {
    return (

        <div className="sidebar">
            <h2>Intracom</h2>
            <ul>
                <li>Messages</li>
                <li>Channels</li>
                <li>Users</li>
                <li>Logout</li>

            </ul>
        </div>
    )
}

    export default Sidebar;
