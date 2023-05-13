import React from 'react'

import { IMessageProps } from "../../types"

const Message = ({src, name, date, text, classText, teg, special, srcImg}: IMessageProps) => {
    return (
        <div className="message">
          <img src={src} alt="avatar" className="message__avatar"/>
          <div className="message__info">
          <span className="message__name">{name}</span>
          <span className="message__date">{date}</span>
          <p className={classText + ` message__text`}>
            <span className="message__text message__text_teg">{teg}</span> 
              {text}
              <br/>
              <span className="message__text message__text_special">{special}</span>
              <br/>
              <img src={srcImg}/>
          </p>
          </div>
        </div>
    );
  }


  export default Message;