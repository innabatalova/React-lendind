import React, { FC } from "react"

import Nav from "./Nav"
import Nomad from "./Nomad"
import Chat from "./Chat"

const Layout: FC = () => {
    return (
        <div className='layout'>
        <Nav/>
        <Nomad/>
        <Chat/>
        </div>
    );
  }

  export default Layout;