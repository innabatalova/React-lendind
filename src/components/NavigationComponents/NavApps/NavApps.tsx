import React from "react"

import { INavAppsProps } from "../../../types"

const NavAppsItem = ({src, classNavItem}: INavAppsProps) => {

  function handleClick(event: any): void { 
          function addActive(){
            let target = event.target as HTMLInputElement;
            target.classList.add('active');
          }
          setTimeout(addActive, 0)  
        };

  return(
  <img src={src} className={classNavItem + ` nav-apps__item`} onClick={handleClick}/>
    )

}

export default NavAppsItem;