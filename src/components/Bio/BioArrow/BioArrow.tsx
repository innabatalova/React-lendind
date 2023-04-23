import React from 'react';

const BioArrow = () => {

  const handleClick = () => {
    console.log('test!');
  }

  return (
    <button className='bio-arrow' onClick={handleClick}>
    </button>
  );

}

export default BioArrow;