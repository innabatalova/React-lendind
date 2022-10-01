import React from 'react'

function ChannelItem(props: Record<string, string>) {
    return (
    <div className="channels-item">{props.value}</div>
    );
  }


  export default ChannelItem;