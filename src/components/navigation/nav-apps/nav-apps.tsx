import React from 'react'


function NavAppsItem(props: Record<string, string>) {
  
    return <img src={props.src} className={`nav-apps__item`}/>;
}

export default NavAppsItem;