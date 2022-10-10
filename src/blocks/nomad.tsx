import React, { useState } from 'react';

import ChannelItem from '../components/nomad/channels-item/channels-item'
import FriendsItem from '../components/nomad/friends-item/friends-item'

import AvatarImg1 from '../static/img/friend-avatar-1.jpg'
import AvatarImg2 from '../static/img/friend-avatar-2.jpg'
import AvatarImg3 from '../static/img/friend-avatar-3.jpg'
import AvatarImg4 from '../static/img/friend-avatar-4.jpg'
import AvatarImg5 from '../static/img/friend-avatar-5.jpg'
import AvatarImg6 from '../static/img/friend-avatar-6.jpg'

import SettingIcon from '../static/img/setting-icon.svg'
import ChatIcon from '../static/img/chat-icon.svg'

function Nomad() {

    const [count] = useState(0);
    

    return (
    <div className='nomad'>
        <div className="container">
        <div className="nomad-title-wrap">
            <h2 className="nomad__title">Nomad List</h2>
            <img src={SettingIcon} alt="setting icon" className='nomad__setting__icon'/>
        </div>

        <div className="nomad-treads-wrap">
            <img src={ChatIcon} alt="chat icon" />
            <span className="nomad__treads">All treads</span>
        </div>

        <div className="nomad-channel">

            <div className="nomad-channel-wrap">
                <h4 className="channel__title">Channel</h4>
                <span className="channel__counter">{count}</span>
            </div>

            <div className="channel-wrapper">
            <ChannelItem value="# general" /> 
            <ChannelItem value="# support"/>
            <ChannelItem value="# marketing"/>
            <ChannelItem value="# thailand"/>
            <ChannelItem value="# bali"/>
            <ChannelItem value="# poland"/>
            <ChannelItem value="# australia"/>
            <ChannelItem value="# jobs"/>
            <ChannelItem value="# startups"/>
            <ChannelItem value="# italy"/>
            <ChannelItem value="# freelance"/>
            </div>
        </div>

        <div className="friends-wrapper">
            <FriendsItem name="Orlando Diggs" src={AvatarImg1} class="online" />
            <FriendsItem name="Carmen Velasco" src={AvatarImg2} class="online" />
            <FriendsItem name="Marie Jensen" src={AvatarImg3} />
            <FriendsItem name="Alex Lee" src={AvatarImg4} />
            <FriendsItem name="Leo Gill" src={AvatarImg5} />
            <FriendsItem name="Britney Cooper" src={AvatarImg6} />
        </div>

        </div>
    </div>
    );
  }


  export default Nomad;