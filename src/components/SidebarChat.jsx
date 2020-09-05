import React from 'react';
import sidebarChat from './sidebarChat.css';
import { Avatar } from '@material-ui/core';

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChart">
            <h2>Room name</h2>
            <p>This is the last message</p>
        </div>
            
        </div>
    );
}

export default SidebarChat;