import React, { useContext } from 'react'
import PlaceHolderContext from '../../../context'

import { IChannelItemProps } from '../../../types'

const ChannelItem = ({ value, clicked }: IChannelItemProps) => {

  const [context, setContext] = useContext(PlaceHolderContext);

  const channelPlaceholder = () => {
    setContext(value)
  }

  return (
    <PlaceHolderContext.Provider value={[context, setContext]}>
      <div className="channels-item" onClick={() => { clicked(); channelPlaceholder()}}>{value}</div>
    </PlaceHolderContext.Provider>
  );
}


export default ChannelItem;