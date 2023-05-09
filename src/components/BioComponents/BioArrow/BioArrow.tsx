import React from 'react';

import { IArrowRotateProps } from '../../../types'

const BioArrow = ({classArrowRotate}: IArrowRotateProps) => {

  return (
    <button className={`bio-arrow ` + classArrowRotate} >
    </button>
  );

}

export default BioArrow;