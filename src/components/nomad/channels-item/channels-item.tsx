import React, { FC } from 'react'

import { IChannelItemProps } from '../../../types'

const ChannelItem: FC<IChannelItemProps> = ({value, clicked}) => {

  const channelPlaceholder = () => {
    let elem: HTMLInputElement = document.querySelector('.chat__footer__message');
    (elem as HTMLInputElement ).placeholder = `Message in ` + value;
  }

    return (
      <div className="channels-item" onClick={() => {clicked();channelPlaceholder();}}>{value}</div>
    );
  }


  export default ChannelItem;