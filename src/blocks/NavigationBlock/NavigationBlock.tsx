import React from "react"

import MacRoundItem from '../../components/NavigationComponents/MacRound/MacRound'
import NavAppsItem from '../../components/NavigationComponents/NavApps/NavApps'
import NavPlus from '../../components/NavigationComponents/NavPlus/NavPlus'

import NavImg1 from '../../static/img/nav-item-1.svg'
import NavImg2 from '../../static/img/nav-item-2.svg'
import NavImg3 from '../../static/img/nav-item-3.svg'
import NavImg4 from '../../static/img/nav-item-4.svg'
import NavImg5 from '../../static/img/nav-item-5.svg'
import NavImg6 from '../../static/img/nav-item-6.svg'
import NavImg7 from '../../static/img/nav-item-7.svg'


const NavigationBlock = () => {

  const navItems: JSX.Element[] = [
    <NavAppsItem src={NavImg1} classNavItem="active" />,
    <NavAppsItem src={NavImg2} />,
    <NavAppsItem src={NavImg3} />,
    <NavAppsItem src={NavImg4} />,
    <NavAppsItem src={NavImg5} />,
    <NavAppsItem src={NavImg6} />,
    <NavAppsItem src={NavImg7} />]

  function handleClickWrap(): void {
    const arrIcons = document.querySelectorAll(".nav-apps__item")
    arrIcons.forEach(function (item: HTMLImageElement) {
      item.classList.remove('active');
    })
  };

  return (
    <div className="navigation">
      <div className="mac-round__wrapper">
        <MacRoundItem classRound="mac-round_red" />
        <MacRoundItem classRound="mac-round_yellow" />
        <MacRoundItem classRound="mac-round_green" />
      </div >

      <div className="nav-apps__wrapper" onClick={handleClickWrap}>{navItems}</div >

      <NavPlus />
    </div>


  );
}


export default NavigationBlock;