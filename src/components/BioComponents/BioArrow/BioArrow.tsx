import React from 'react';

import BioArrowImg from '../../../static/img/bio-arrow.svg';

const BioArrow = () => {

  const handleClick = () => {
    console.log(BioArrowImg);
  }

  return (
    <button className='bio-arrow' onClick={handleClick}>
    </button>
  );

}

export default BioArrow;