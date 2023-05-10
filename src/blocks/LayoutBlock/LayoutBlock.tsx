import React, { useState } from "react"

import NavigationBlock from "../NavigationBlock/NavigationBlock"
import NomadBlock from "../NomadBlock/NomadBlock"
import ChatBlock from "../ChatBlock/ChatBlock"
import BioBlock from "../BioBlock/BioBlock"

const LayoutBlock = () => {
    const [visibleNomad, setVisibleNomad] = useState('');
    const toggleVisibleNomad = () => {
        setVisibleNomad('hidden')
        setVisibleChat('visible')
    }

    const [visibleChat, setVisibleChat] = useState('');
    const toggleVisibleChat = () => {
        setVisibleNomad('visible')
        setVisibleChat('hidden')
    }

    const [visibleBio, setVisibleBio] = useState('');
    const [arrowRotate, setArrowRotate] = useState('');
    const toggleVisibleBio = () => {
        visibleBio == 'bioclose' ? setVisibleBio('') : setVisibleBio('bioclose')
        arrowRotate == 'close' ? setArrowRotate('') : setArrowRotate('close')
    }

    return (
        <div className='layout' >
            <NavigationBlock />
            <NomadBlock classVisible={visibleNomad} clicked={toggleVisibleNomad} />
            <ChatBlock classVisible={visibleChat} clicked={toggleVisibleChat} />
            <BioBlock classVisible={visibleBio}
                clicked={toggleVisibleBio}
                classArrowRotate={arrowRotate} />
        </div>
    );
}

export default LayoutBlock;