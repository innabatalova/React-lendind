import React, { FC } from "react"
import { IChatFooterProps } from '../../types'

const ChatFooter: FC<IChatFooterProps> = ({channelPlaceholder}) => {

  return (
    <div className="chat__footer">
      <input type="text" className="chat__footer__message" placeholder={`Message in ` + channelPlaceholder}/>
    </div>
  );
}


export default ChatFooter;