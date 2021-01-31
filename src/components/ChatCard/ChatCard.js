import React from 'react'
import { Avatar } from '@material-ui/core'

import './ChatCard.css'

function ChatCard() {
  return (
    <div className="chatCard">
      <Avatar src="https://avatars.dicebear.com/api/human/random.svg"/>
      <div className="chartCard__details">
        <h2>Name</h2>
        <p>Recet Message...</p>
      </div>
    </div>
  )
}

export default ChatCard
