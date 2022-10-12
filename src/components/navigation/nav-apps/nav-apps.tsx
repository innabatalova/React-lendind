import React from 'react'


interface ControlProps {
  src?: string;
  class?: string;
}


class NavAppsItem extends React.Component <ControlProps> {

  src: string;
  class: string;

  constructor(props: Record<string, any> = {}) {
    super(props);
    this.src = props.src;
    this.class = props.class;
  }

  handleClick(e: React.SyntheticEvent<EventTarget>): void { 
          function addActive(){
            let target = e.target as HTMLInputElement;
            target.classList.add('active');
          }

          setTimeout(addActive, 0)
            
        };

  render() {
    return <img src={this.src} className={`nav-apps__item ${this.class}`} onClick={this.handleClick}
    />;
    
  }

}

export default NavAppsItem;