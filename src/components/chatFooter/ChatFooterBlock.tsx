import React, { useContext } from "react"
import PlaceHolderContext from '../../context'

import FooterFile from '../../static/img/chat-footer-file.svg'
import FooterSmile from '../../static/img/chat-footer-smile.svg'
import FooterVoice from '../../static/img/chat-footer-voice.svg'

const ChatFooter = () => {

  const [context, setContext] = useContext(PlaceHolderContext)
  console.log(setContext, FooterFile, FooterSmile, FooterVoice);
  
  return (
    <div className="chat__footer">
      <input type="text" className="chat__footer__message" placeholder={`Message in ` + context}/>
    </div>
  );
}


export default ChatFooter;