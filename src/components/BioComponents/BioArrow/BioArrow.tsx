import React from 'react';

import { IArrowRotateProps } from '../../../types'
import BioArrowImg from "../../../static/img/bio-arrow.svg"

const BioArrow = ({classArrowRotate}: IArrowRotateProps) => {

  return (
    <div>
      <img src={BioArrowImg} className={`bio-arrow ` + classArrowRotate} alt="bio-arrow" />
    </div>
  );

}

export default BioArrow;