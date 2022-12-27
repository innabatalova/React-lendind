import React from 'react';

import Message from '../components/message/message'

import AvatarImg2 from '../static/img/friend-avatar-2.jpg'
import HeaderStar from '../static/img/chat-header-star.svg'
import HeaderUsers from '../static/img/chat-header-users.svg'
import HeaderRing from '../static/img/chat-header-ring.svg'

function Chat() {
    return (
      <div className="chat">
        <div className="chat__header">
          <div className="chat__wrapper">
          <div className="chat__header__channel">
            <span>#general</span>
            <img src={HeaderStar} alt="chat header star" />
          </div>
          <div className="chat__header__search">
            <div className="chat__header__search__users">
              <img src={HeaderUsers} alt="chat header users" />
              <span>1,093</span>
            </div>
            <input type="text" className="chat__header__input" placeholder='Search...' />
            <img src={HeaderRing} alt="chat header ring" className="chat__header__ring" />
            <div className="chat__header__menu">
              <div className="chat__header__menu__dot"></div>
              <div className="chat__header__menu__dot"></div>
              <div className="chat__header__menu__dot"></div>
            </div>
          </div>
          </div>
        </div>
          <div className="chat__wrapper">
            <Message src={AvatarImg2} name="Nala Nester" date="11:54 AM" text='Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).'/>
        </div>
      </div>
    );
  }

export default Chat;