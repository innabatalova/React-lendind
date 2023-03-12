import React, { FC } from "react"

import ChannelItem from '../components/nomad/Channels-item/Channels-item'
import FriendsItem from '../components/nomad/Friends-item/Friends-item'

import AvatarImg1 from '../static/img/friend-avatar-1.jpg'
import AvatarImg2 from '../static/img/friend-avatar-2.jpg'
import AvatarImg3 from '../static/img/friend-avatar-3.jpg'
import AvatarImg4 from '../static/img/friend-avatar-4.jpg'
import AvatarImg5 from '../static/img/friend-avatar-5.jpg'
import AvatarImg6 from '../static/img/friend-avatar-6.jpg'

import SettingIcon from '../static/img/setting-icon.svg'
import ChatIcon from '../static/img/chat-icon.svg'

const Nomad: FC = () => {

    const channels: JSX.Element[] = [
            <ChannelItem value="# general" /> ,
            <ChannelItem value="# support"/>,
            <ChannelItem value="# marketing"/>,
            <ChannelItem value="# thailand"/>,
            <ChannelItem value="# bali"/>,
            <ChannelItem value="# poland"/>,
            <ChannelItem value="# australia"/>,
            <ChannelItem value="# jobs"/>,
            <ChannelItem value="# startups"/>,
            <ChannelItem value="# italy"/>,
            <ChannelItem value="# freelance"/> ];

    const channelsLenght: number = channels.length;
    const listChannels: JSX.Element[] = channels.map((number) =><>{number}</>);

    const friends: JSX.Element[] = [
            <FriendsItem name="Orlando Diggs" src={AvatarImg1} classFriend="online" />,
            <FriendsItem name="Carmen Velasco" src={AvatarImg2} classFriend="online" />,
            <FriendsItem name="Marie Jensen" src={AvatarImg3} />,
            <FriendsItem name="Alex Lee" src={AvatarImg4} />,
            <FriendsItem name="Leo Gill" src={AvatarImg5} />,
            <FriendsItem name="Britney Cooper" src={AvatarImg6} /> ];

    const friendsLenght: number = friends.length;
    const listFriends: JSX.Element[] = friends.map((number) =><>{number}</>)

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
                <h4 className="nomad-channel__title">Channel</h4>
                <span className="nomad-channel__counter">{channelsLenght}</span>
            </div>
        
        <div className="channel-wrapper">  {listChannels}  </div>  

        </div>

            <div className="nomad-friends-wrap">
                <h4 className="friends__title">Friends</h4>
                <span className="friends__counter">{friendsLenght}</span>
            </div>

        <div className="friends-wrapper">  {listFriends}  </div>

        </div>
    </div>
    )
  }


  export default Nomad;