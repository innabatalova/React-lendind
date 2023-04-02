import React from 'react';

const BioButton = () => {

  const handleClick = () => {
    console.log('test!');
    
  }
  return (
    <button className='biobutton' onClick={handleClick}>
    </button>
  );

}

export default BioButton;