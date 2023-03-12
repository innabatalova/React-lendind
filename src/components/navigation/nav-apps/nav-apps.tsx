import React, { FC } from "react"

import { INavAppsProps } from "../../../types"

const NavAppsItem:FC<INavAppsProps> = ({src, classNavItem}) => {

  function handleClick(e: React.SyntheticEvent<EventTarget>): void { 
          function addActive(){
            let target = e.target as HTMLInputElement;
            target.classList.add('active');
          }
          setTimeout(addActive, 0)  
        };

  return(
  <img src={src} className={classNavItem + ` nav-apps__item`} onClick={handleClick}/>
    )

}

export default NavAppsItem;