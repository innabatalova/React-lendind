import React from "react"

import { IMessageDateProps } from "../../types"


const MessageDate = ({text}: IMessageDateProps) => {
    return(
       <div className="date">
        <div className="date__line"></div>
        <span className="date__text">{text}</span>
        <div className="date__line"></div>
       </div>
    )

}

export default MessageDate