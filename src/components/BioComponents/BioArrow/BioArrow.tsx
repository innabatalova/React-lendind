import React, { useState } from 'react';

const BioArrow = () => {
  const [close, setClose] = useState('');
  const [BioArrowClose, setBioArrowClose] = useState('');

  const handleClick = () => {
  }

  return (
    <button className='bio-arrow' onClick={handleClick}>
    </button>
  );

}

export default BioArrow;