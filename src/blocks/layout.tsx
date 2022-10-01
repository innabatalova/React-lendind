import React from 'react'

import Nav from "./navigation"
import Nomad from "./nomad"

function Layout() {
    return (
        <div className='layout'>
             <Nav/>
             <Nomad/>
        </div>
   
    );
  }

  export default Layout;