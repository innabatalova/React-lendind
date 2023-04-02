import React from 'react';

import BioSocial from "../components/Bio/BioSocial/BioSocial"
import BioField from "../components/Bio/BioField/BioField"
import BioButton from "../components/Bio/BioButton/BioButton"

const Bio = () => {
  return (
    <div className="bio">
       <div className="bio-social-wrapper">
        <BioSocial src="http://localhost:3000/img/bio-icon-facebook.svg"/>
        <BioSocial src="http://localhost:3000/img/bio-icon-twitter.svg"/>
        <BioSocial src="http://localhost:3000/img/bio-icon-instagram.svg"/>
        <BioSocial src="http://localhost:3000/img/bio-icon-in.svg"/>
       </div>
       <BioField title="Username" text="@amilia_lu"/>
       <BioField title="Email" text="a-luna@gmail.com"/>
       <BioField title="Skype" text="amiluna"/>
       <BioField title="Timezone" text="2:21 PM Local time"/>
       <BioButton/>
    </div>
  );

}

export default Bio;