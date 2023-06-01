import React, { useContext } from "react"
import PlaceHolderContext from '../../context'

import FooterFile from '../../static/img/chat-footer-file.svg'
import FooterSmile from '../../static/img/chat-footer-smile.svg'
import FooterVoice from '../../static/img/chat-footer-voice.svg'

const ChatFooter = () => {

  const [context, setContext] = useContext(PlaceHolderContext)
  console.log(setContext);

  return (
    <div className="chat__footer">
      <div className="chat__footer__wrap">
        <input type="text" className="chat__footer__message" placeholder={`Message in ` + context} />
        <img src={FooterFile} className="chat__footer__img chat__footer__img_file" alt="footer file" />
        <img src={FooterVoice} className="chat__footer__img chat__footer__img_voice" alt="footer voice" />
        <img src={FooterSmile} className="chat__footer__img chat__footer__img_smile" alt="footer smile" />
      </div>
    </div>
  );
}


export default ChatFooter;