import React, { useContext } from "react"
import PlaceHolderContext from '../../context'

const ChatFooter = () => {

  const [context, setContext] = useContext(PlaceHolderContext)
  console.log(setContext);
  
  return (
    <div className="chat__footer">
      <input type="text" className="chat__footer__message" placeholder={`Message in ` + context}/>
    </div>
  );
}


export default ChatFooter;