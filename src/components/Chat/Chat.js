import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import './Chat.css'

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://ui-avatars.com/api/?name=Kabilesh+T`} />

        <div className="chat_details">
          <h3>Name</h3>
          <p>Last seen today at 3:15pm</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body"></div>

      <div className="chat__footer"></div>

    </div>
  )
}

export default Chat
