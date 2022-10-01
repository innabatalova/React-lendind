import React from 'react'


interface ControlProps {
  src?: string;
}


class NavAppsItem extends React.Component <ControlProps> {

  src: string;

  constructor(props: Record<string, any> = {}) {
    super(props);
    this.src = props.src;
    
  }

  handleSubmit(e: React.SyntheticEvent<EventTarget>): void {
          const arrIcons = document.querySelectorAll(".nav-apps__item")
          arrIcons.forEach(function(item: HTMLImageElement){
            item.style.opacity = "0.5"
          })
          let target = e.target as HTMLInputElement;
          target.style.opacity = "1";
        };

  render() {
    return <img src={this.src} className={`nav-apps__item`} onClick={this.handleSubmit}/>;
    
  }

}

export default NavAppsItem;