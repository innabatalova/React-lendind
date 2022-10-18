import React from 'react'

function Message(props: Record<string, string>) {
    return (
        <div className="message">
          <div className="message__avatar"> <img src={props.src} alt="avatar" /> </div>
          <div className="message__info"></div>
          <span className="message__name">{props.name}</span>
          <span className="message__date">{props.date}</span>
          <p className="message_text">{props.text}</p>
        </div>
    );
  }


  export default Message;