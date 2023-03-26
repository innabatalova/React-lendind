import React from "react"
import { IChatFooterProps } from '../../types'

const ChatFooter = ({channelPlaceholder}: IChatFooterProps) => {

  return (
    <div className="chat__footer">
      <input type="text" className="chat__footer__message" placeholder={`Message in ` + channelPlaceholder}/>
    </div>
  );
}


export default ChatFooter;