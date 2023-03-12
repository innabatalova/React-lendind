import React, {FC} from 'react'

import { IChannelItemProps } from '../../../types'

const ChannelItem: FC<IChannelItemProps> = ({value}) => {
    return (
    <div className="channels-item">{value}</div>
    );
  }


  export default ChannelItem;