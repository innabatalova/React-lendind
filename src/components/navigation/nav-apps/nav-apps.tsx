import React from 'react'

function NavAppsItem(props: Record<string, string>) {

    function handleSubmit(e: React.SyntheticEvent<EventTarget>): void {
        let target = e.target as HTMLInputElement;
        target.style.opacity = "1";
        
    }
  
    return <img src={props.src} className={`nav-apps__item`} onClick={handleSubmit}/>;
  }


export default NavAppsItem;