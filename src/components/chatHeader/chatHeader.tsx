import React, { FC } from "react"

import HeaderStar from '../../static/img/chat-header-star.svg'
import HeaderUsers from '../../static/img/chat-header-users.svg'
import HeaderRing from '../../static/img/chat-header-ring.svg'
import HeaderSearch from '../../static/img/chat-header-search.svg'

const ChatHeader: FC = () => {
    const style = {
      background: 'url(' + HeaderSearch + ') 95% no-repeat',
    }
    return (
        <div className="chat__header">
          <div className="chat__header__wrapper">
          <div className="chat__header__channel">
            <span>#general</span>
            <img src={HeaderStar} alt="chat header star" />
          </div>
          <div className="chat__header__search">
            <div className="chat__header__search__users">
              <img src={HeaderUsers} alt="chat header users" />
              <span>1,093</span>
            </div>
            <input type="text" className="chat__header__input" placeholder='Search...' style={style}/>
            <img src={HeaderRing} alt="chat header ring" className="chat__header__ring" />
            <div className="chat__header__menu">
              <div className="chat__header__menu__dot"></div>
              <div className="chat__header__menu__dot"></div>
              <div className="chat__header__menu__dot"></div>
            </div>
          </div>
          </div>
        </div>
    );
  }


  export default ChatHeader;