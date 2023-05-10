import React, { useContext } from "react"
import PlaceHolderContext from '../../context'

const ChatFooter = () => {

  const setNewPlaceHolder = useContext(PlaceHolderContext)
  
  return (
    <div className="chat__footer">
      <input type="text" className="chat__footer__message" placeholder={`Message in ` + setNewPlaceHolder()}/>
    </div>
  );
}


export default ChatFooter;