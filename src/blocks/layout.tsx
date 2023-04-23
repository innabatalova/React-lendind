import React, { useState } from "react"

import Nav from "./Nav"
import NomadBlock from "./NomadBlock"
import Chat from "./Chat"
import Bio from "./Bio"

const Layout = () => {
    const [ visibleNomad, setVisibleNomad ] = useState('');
    const toggleVisibleNomad = () => {
        setVisibleNomad('hidden')
        setVisibleChat('visible')

    }
    const [ visibleChat, setVisibleChat ] = useState('');
    const toggleVisibleChat = () => {
            setVisibleNomad('visible')
            setVisibleChat('hidden')
            
    }

    return (
        <div className='layout' >
        <Nav/>
        <NomadBlock classVisible = {visibleNomad} clicked = {toggleVisibleNomad}/>
        <Chat classVisible = {visibleChat} clicked = {toggleVisibleChat}/>
        <Bio/>
        </div>
    );
  }

  export default Layout;