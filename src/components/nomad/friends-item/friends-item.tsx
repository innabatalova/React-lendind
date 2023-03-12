import React, {FC} from 'react'

import { IFriendItemProps } from '../../../types'

const FriendsItem: FC<IFriendItemProps> = ({classFriend, src, name}) => {
    return (
    <div className="frends-item">
      <div className={`frends-item__dot ${classFriend}`}></div>
      <img src={src} alt="frends avatar" className="frends-item__avatar" />
      <div className="frends-item__name">{name}</div>
      </div>
    );
  }


  export default FriendsItem;