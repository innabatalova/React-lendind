import React from 'react';
import { IVisibleProps } from '../../types'

import ChatHeader from '../../components/ChatHeader/ChatHeader'
import Message from '../../components/Message/Message'
import MessageDate from '../../components/MessageDate/MessageDate'
import ChatFooter from '../../components/ChatFooter/ChatFooter'

import AvatarImg1 from '../../static/img/chat-avatar-1.jpg'
import AvatarImg2 from '../../static/img/chat-avatar-2.png'
import AvatarImg3 from '../../static/img/chat-avatar-3.png'
import AvatarImg4 from '../../static/img/chat-avatar-4.png'
import AvatarImg5 from '../../static/img/chat-avatar-5.png'

import ChatPhoto from '../../static/img/chat-photo.jpg'

const ChatBlock = ({classVisible, clicked}: IVisibleProps) => {
  return (
    <div className={`chat ` + classVisible} >
      <ChatHeader clicked={clicked}/>
        <div className="chat__wrapper">
          <Message src={AvatarImg1} classText="message__text_link" name="Jeshua Stout" date="6:38 PM" text='@pierrhack I did for 6 days in' special=' Iceland'/>
          <MessageDate text='Monday, October 22nd'/>
          <Message src={AvatarImg2} name="Harold Adams" date="5.02 PM" text='Which country to visit next? This is a photo with my friends - celebrating in' special=' Balimy-top-places.jpg' srcImg={ChatPhoto}/>
          <MessageDate text='Yesterday'/>
          <Message src={AvatarImg3} classText="message__text_link" name="Aada Laine" date="11:54 AM" text='@har_adams wow it’s amazing, I want to buy a van and travelling next year'/>
          <MessageDate text='Today'/>
          <Message src={AvatarImg4} name="Nala Nester" date="11:54 AM" text='Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).'/>
          <Message src={AvatarImg5} name="Ramon Bateman" date="11:59 AM" teg='@aa_da ' text="What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want."/>
          <Message src={AvatarImg1} classText="message__text_link" name="Jeshua Stout" date="6:38 PM" text='@pierrhack I did for 6 days in' special=' Iceland'/>
          <MessageDate text='Monday, October 22nd'/>
          <Message src={AvatarImg2} name="Harold Adams" date="5.02 PM" text='Which country to visit next? This is a photo with my friends - celebrating in' special=' Balimy-top-places.jpg' srcImg={ChatPhoto}/>
          <MessageDate text='Yesterday'/>
          <Message src={AvatarImg3} classText="message__text_link" name="Aada Laine" date="11:54 AM" text='@har_adams wow it’s amazing, I want to buy a van and travelling next year'/>
          <MessageDate text='Today'/>
          <Message src={AvatarImg4} name="Nala Nester" date="11:54 AM" text='Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).'/>
          <Message src={AvatarImg5} name="Ramon Bateman" date="11:59 AM" teg='@aa_da ' text="What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want."/>
        </div>
      <ChatFooter channelPlaceholder='# general'/>
    </div>
  );

}

export default ChatBlock;