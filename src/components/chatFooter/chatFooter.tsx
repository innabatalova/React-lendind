import React, { FC } from "react"

const ChatFooter: FC = () => {
  
  return (
    <div className="chat__footer">
      <input type="text" className="chat__footer__message" placeholder='Message in #general'/>
    </div>
  );
}


export default ChatFooter;