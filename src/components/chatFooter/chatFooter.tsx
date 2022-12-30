import React from 'react'

import FooterFile from '../../static/img/chat-footer-file.svg'
import FooterVoice from '../../static/img/chat-footer-voice.svg'
import FooterSmile from '../../static/img/chat-footer-smile.svg'

function ChatFooter() { 
    const style = {
      background: 'url(' + FooterFile + ') 1% no-repeat, url(' + FooterVoice + ') 4% no-repeat, url(' + FooterSmile + ') 99% no-repeat',
    }
    return (
        <div className="chat__footer">
          <input type="text" className="chat__footer__message" placeholder='Message in #general' style={style}/>
        </div>
    );
  }


  export default ChatFooter;