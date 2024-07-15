import React from 'react';
import { RiChatNewFill } from "react-icons/ri";

const ChatButton = ({ onClick }) => {
    return (
        <div className="chat-button" onClick={onClick}>
            <FaComment />
            </div>
    );
};


export default ChatButton;