import React from 'react';

import { IBioFieldProps } from "../../../types"

const BioField = ({title, text}: IBioFieldProps) => {
  return (
    <div className='biofield'>
        <span className='biofield__title'>{title}</span>
        <span className='biofield__text'>{text}</span>
    </div>
  );

}

export default BioField;