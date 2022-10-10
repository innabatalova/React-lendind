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

  handleClick(e: React.SyntheticEvent<EventTarget>): void { 
          function addActive(){
            let target = e.target as HTMLInputElement;
            target.style.opacity = "1";
          }

          setTimeout(addActive, 0)
            
        };

  render() {
    return <img src={this.src} className={`nav-apps__item`} onClick={this.handleClick}
    />;
    
  }

}

export default NavAppsItem;


// function FirstWindowItems({item}) {
// function handleClick(item){
//     // e.preventDefault();
//     console.log(item.FIO, item.position);
//     setActiveItem(item.id)
//   }

//     const [activeItem ,setActiveItem] = useState(null)

//     const items = [item.FIO, item.position, item.birthDay, 
//   item.sex ? "М" : "Ж", 
//   item.fired ? "Уволен":"Работает"]

// return(
//     <div className = "window__items">
//         {items.map((item, id) => {
//                 <div 
//                 onClick = {() => handleClick(id)} 
//                 style={{backgroundColor: activeItem === id ? "#cacaca" : "inherit"}} 
//                 className = "window__item window__name"
//              >
//               {item}
//              </div> 
//         })}
//         </div>            
//     </div>
// )
// }