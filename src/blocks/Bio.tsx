import React from 'react';

import BioField from "../components/Bio/BioField/BioField"
import BioButton from "../components/Bio/BioButton/BioButton"

const Bio = () => {
  return (
    <div className="bio">
       <BioField title="Username" text="@amilia_lu"/>
       <BioField title="Email" text="a-luna@gmail.com"/>
       <BioField title="Skype" text="amiluna"/>
       <BioField title="Timezone" text="2:21 PM Local time"/>
       <BioButton/>
    </div>
  );

}

export default Bio;