import React from 'react';

import BioSocial from "../../components/BioComponents/BioSocial/BioSocial"
import BioField from "../../components/BioComponents/BioField/BioField"
import BioArrow from "../../components/BioComponents/BioArrow/BioArrow"

import PhotoMain from "../../static/img/profile-main-photo.jpg"

import IconFacebook from "../../static/img/bio-icon-facebook.svg"
import IconTwitter from "../../static/img/bio-icon-twitter.svg"
import IconInstagram from "../../static/img/bio-icon-instagram.svg"
import IconIn from "../../static/img/bio-icon-in.svg"

const BioBlock = () => {
  return (
    <div className="bio">
      <img src={PhotoMain} className="bio-main" alt="photo profile" />
      <div className="bio-wrapper">
        <div className="bio-name">
          <h3 className="bio__name">Amilia Luna</h3>
          <div className='frends-item__dot customer'></div>
        </div>
        <span className="bio__staff">UI Designer</span>
        <div className="bio-social-wrapper">
          <BioSocial src={IconFacebook} />
          <BioSocial src={IconTwitter} />
          <BioSocial src={IconInstagram} />
          <BioSocial src={IconIn} />
        </div>
        <div className="bio-button">
          <button className="bio-button__message">Message</button>
          <div className="bio-button__list"></div>
        </div>
        <BioField title="Username" text="@amilia_lu" />
        <BioField title="Email" text="a-luna@gmail.com" />
        <BioField title="Skype" text="amiluna" />
        <BioField title="Timezone" text="2:21 PM Local time" />
      </div>
      <BioArrow />
    </div>
  );

}

export default BioBlock;