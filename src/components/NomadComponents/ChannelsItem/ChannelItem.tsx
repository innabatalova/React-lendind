import React, { useContext } from 'react'
import PlaceHolderContext from '../../../context'

import { IChannelItemProps } from '../../../types'

const ChannelItem = ({ value, clicked }: IChannelItemProps) => {

  const { newPlaceHolder, setNewPlaceHolder } = useContext(value)

  const channelPlaceholder = () => {
    // let elem: HTMLInputElement = document.querySelector('.chat__footer__message');
    // (elem as HTMLInputElement ).placeholder = `Message in ` + value;
    setNewPlaceHolder(value)
    console.log(newPlaceHolder);
  }

  return (
    <PlaceHolderContext.Provider value={{newPlaceHolder, setNewPlaceHolder}}>
      <div className="channels-item" onClick={() => { clicked(); channelPlaceholder() }}>{value}</div>
    </PlaceHolderContext.Provider >
  );
}


export default ChannelItem;