import React from 'react'

import Nav from "./navigation"
import Nomad from "./nomad"
import Chat from "./chat"

function Layout() {
    return (
        <div className='layout'>
        <Nav/>
        <Nomad/>
        <Chat/>
        </div>
   
    );
  }

  export default Layout;