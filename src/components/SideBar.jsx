import React from 'react';
import sidebar from './sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import img from '../images/jayman.jpg'


const SideBar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src= {img}/>
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
}

export default SideBar;
