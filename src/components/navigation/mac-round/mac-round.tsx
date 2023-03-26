import React from "react"

import { IMacRoundProps } from "../../../types"

const MacRoundItem = ({classRound}: IMacRoundProps) => {
    return <div className={classRound + ` mac-round`}></div>;
}

export default MacRoundItem;