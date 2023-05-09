import React, { useState } from 'react';

const BioArrow = () => {

  const [ BioArrow, setBioArrow ] = useState('');

  const toggleBioArrow = () => {
    BioArrow =='close' ? setBioArrow('') : setBioArrow('close')
  }

  return (
    <button className={`bio-arrow ` + BioArrow} onClick={toggleBioArrow}>
    </button>
  );

}

export default BioArrow;