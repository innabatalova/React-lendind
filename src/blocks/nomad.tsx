import React, { FC, useState, useEffect } from "react"
import { IVisibleProps, IStateProps } from '../types'
import API from '../api/usersApi'

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

const Nomad: FC<IVisibleProps> = ({ classVisible, clicked }) => {

    const channels: JSX.Element[] = [
        <ChannelItem value="# general" clicked={clicked} />,
        <ChannelItem value="# support" clicked={clicked} />,
        <ChannelItem value="# marketing" clicked={clicked} />,
        <ChannelItem value="# thailand" clicked={clicked} />,
        <ChannelItem value="# bali" clicked={clicked} />,
        <ChannelItem value="# poland" clicked={clicked} />,
        <ChannelItem value="# australia" clicked={clicked} />,
        <ChannelItem value="# jobs" clicked={clicked} />,
        <ChannelItem value="# startups" clicked={clicked} />,
        <ChannelItem value="# italy" clicked={clicked} />,
        <ChannelItem value="# freelance" clicked={clicked} />];

    const channelsLenght: number = channels.length;
    const listChannels: JSX.Element[] = channels.map((number) => <>{number}</>);

    const friends: JSX.Element[] = [
        <FriendsItem name='Orlando Diggs' src={AvatarImg1} classFriend="online" />,
        <FriendsItem name="Carmen Velasco" src={AvatarImg2} classFriend="online" />,
        <FriendsItem name="Marie Jensen" src={AvatarImg3} />,
        <FriendsItem name="Alex Lee" src={AvatarImg4} />,
        <FriendsItem name="Leo Gill" src={AvatarImg5} />,
        <FriendsItem name="Britney Cooper" src={AvatarImg6} />,
    ];

    const [state, setState] = useState(friends)

    const userDataApi = async (): Promise<void> => {
        let userData = await API.get('/users', {
            params: {
                results: 9,
                inc: 'name, avatar'
            }
        })
        const userApiList = userData.data.map((item: IStateProps) => <FriendsItem name={item.name} src={item.avatar} />);
        
        const allFriends = [...friends, ...userApiList]
        console.log(allFriends);
        setState(allFriends)
    }
     
    useEffect(() => {
        userDataApi()
      }, []);

    const listFriends: JSX.Element[] = state.map((number) => <>{number}</>)
    const friendsLenght: number = listFriends.length;


    return (
        <div className={`nomad ` + classVisible}>
            <div className="container">
                <div className="nomad-title-wrap">
                    <h2 className="nomad__title">Nomad List</h2>
                    <img src={SettingIcon} alt="setting icon" className='nomad__setting__icon' />
                </div>

                <div className="nomad-treads-wrap">
                    <img src={ChatIcon} alt="chat icon" />
                    <span className="nomad__treads">All treads</span>
                </div>

                <div className="nomad-channel">

                    <div className="nomad-channel-wrap"  >
                        <h4 className="nomad-channel__title">Channel</h4>
                        <span className="nomad-channel__counter">{channelsLenght}</span>
                    </div>

                    <div className="channel-wrapper">{listChannels}</div>

                </div>

                <div className="nomad-friends-wrap">
                    <h4 className="friends__title">Friends</h4>
                    <span className="friends__counter">{friendsLenght}</span>
                </div>

                <div className="friends-wrapper">{listFriends}</div>

            </div>
        </div>
    )
}


export default Nomad;