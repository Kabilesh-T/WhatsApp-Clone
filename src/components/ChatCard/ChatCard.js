import React, {useState, useEffect} from 'react'
import { Avatar } from '@material-ui/core'

import './ChatCard.css'

function ChatCard() {

  // const [seed, setSeed] = useState("");

  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 1000));
  // },  []);

  return (
    <div className="chatCard">
      {/* <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/> */}
      <Avatar src={`https://ui-avatars.com/api/?name=Kabilesh+T`}/>
      <div className="chartCard__details">
        <h2>Name</h2>
        <p>Recet Message...</p>
      </div>
    </div>
  )
}

export default ChatCard
