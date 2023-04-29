import React from 'react';

import { IBioSocialProps } from '../../../types'

const BioSocial = ({src}: IBioSocialProps) => {
  return (
    <div className='biosocial'>
        <img src={src} alt="bio-icon" />
    </div>
  );

}

export default BioSocial;