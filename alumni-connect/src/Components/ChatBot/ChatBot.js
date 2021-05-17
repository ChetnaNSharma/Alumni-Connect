import React, { useState } from 'react';
import SimpleForm from './Simpleform';
import './ChatBot.css'

const ChatBot = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

    return (
      <>     
      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
          {!showChat 
            ? <button  className = "btn-style" onClick={() => startChat()}>Click to chat... </button> 
            : <button  className = "btn-style" onClick={() => hideChat()}>Click to hide... </button>}
      </div>      
      </>
    )
}

export default ChatBot;