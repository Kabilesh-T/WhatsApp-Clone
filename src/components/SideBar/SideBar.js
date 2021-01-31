import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import './SideBar.css'
import ChatCard from '../ChatCard/ChatCard';

function SideBar() {

  const createNewChat = () => {
    const name = prompt("Enter contact name...");
    if (name) {
      //TO-DO
    }
  };

  return (
    <div className="sidebar">

      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon onClick={createNewChat} />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>

      <div className="sidebar__body">
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />

      
      </div>
    </div>
  )
}

export default SideBar
