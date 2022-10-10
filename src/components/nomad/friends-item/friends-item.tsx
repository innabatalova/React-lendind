import React from 'react'

function FriendsItem(props: Record<string, string>) {
    return (
    <div className="frends-item">
      <div className={`frends-item__dot ${props.class}`}></div>
      <img src={props.src} alt="frends avatar" className="frends-item__avatar" />
      <div className="frends-item__name">{props.name}</div>
      </div>
    );
  }


  export default FriendsItem;