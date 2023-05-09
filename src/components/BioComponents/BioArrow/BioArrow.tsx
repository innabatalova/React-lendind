import React, { useState } from 'react';

import BioArrowImg from '../../../static/img/bio-arrow.svg';

const BioArrow = () => {

  console.log(BioArrowImg);
  const [close, setClose] = useState('');
  const [BioArrowClose, setBioArrowClose] = useState('');

  const handleClick = () => {
    close === 'close' ? setClose('') : setClose('close')
    BioArrowClose === 'bio-arrow_close' ? setBioArrowClose('') : setBioArrowClose('bio-arrow_close')
    
    let elem: HTMLDivElement = document.querySelector('.bio');
    (elem as HTMLDivElement).classList.add('test')
  }

  return (
    <button onClick={handleClick} className={`bio-arrow ${BioArrowClose}`}>
    </button>
  );

}

export default BioArrow;