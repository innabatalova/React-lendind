import React from 'react'

function Message(props: Record<string, string>) {
    return (
        <div className="message">
          <img src={props.src} alt="avatar" className="message__avatar"/>
          <div className="message__info">
          <span className="message__name">{props.name}</span>
          <span className="message__date">{props.date}</span>
          <p className="message__text">{props.text}</p>
          </div>
        </div>
    );
  }


  export default Message;