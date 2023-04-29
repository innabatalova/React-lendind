import React from "react"
import { IChatFooterProps } from '../../types'

import FooterFile from "../../static/img/chat-footer-file.svg"
import FooterSmile from "../../static/img/chat-footer-smile.svg"
import FooterVoice from "../../static/img/chat-footer-voice.svg"

const ChatFooter = ({channelPlaceholder}: IChatFooterProps) => {
  console.log(FooterFile, FooterSmile, FooterVoice);
  
  return (
    <div className="chat__footer">
      <input type="text" className="chat__footer__message" placeholder={`Message in ` + channelPlaceholder}/>
    </div>
  );
}


export default ChatFooter;