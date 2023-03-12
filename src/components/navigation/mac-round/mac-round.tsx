import React, { FC } from "react"

import { IMacRoundProps } from "../../../types"

const MacRoundItem: FC<IMacRoundProps> = ({classRound}) => {
    return <div className={classRound + ` mac-round`}></div>;
}

export default MacRoundItem;