import React from 'react'
import MacRoundItem from '../../components/navigation/mac-round/mac-round'
import NavAppsItem from '../../components/navigation/nav-apps/nav-apps'
import NavPlus from '../../components/navigation/nav-plus/nav-plus'

import NavImg1 from '../../static/img/nav-item-1.svg'
import NavImg2 from '../../static/img/nav-item-2.svg'
import NavImg3 from '../../static/img/nav-item-3.svg'
import NavImg4 from '../../static/img/nav-item-4.svg'
import NavImg5 from '../../static/img/nav-item-5.svg'
import NavImg6 from '../../static/img/nav-item-6.svg'
import NavImg7 from '../../static/img/nav-item-7.svg'

function Nav() {
    return (
    <div>
      <div className="mac-round__wrapper">
        <MacRoundItem class="mac-round_red"/>
        <MacRoundItem class="mac-round_yellow"/>
        <MacRoundItem class="mac-round_green"/>
      </div >

      <div className="nav-apps__wrapper">
        <NavAppsItem src={NavImg1}/>
        <NavAppsItem src={NavImg2}/>
        <NavAppsItem src={NavImg3}/>
        <NavAppsItem src={NavImg4}/>
        <NavAppsItem src={NavImg5}/>
        <NavAppsItem src={NavImg6}/>
        <NavAppsItem src={NavImg7}/>
      </div >

      <NavPlus/>
    </div>
   

    );
  }


  export default Nav;