import React from 'react';

import BioField from "../components/BioField/BioField"

const Bio = () => {
  return (
    <div>
       <BioField title="Username" text="@amilia_lu"/>
       <BioField title="Email" text="a-luna@gmail.com"/>
       <BioField title="Skype" text="amiluna"/>
       <BioField title="Timezone" text="2:21 PM Local time"/>
    </div>
  );

}

export default Bio;