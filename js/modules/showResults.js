import NextRound from "../classes/NextRound.js";
import EndGame from "../classes/EndGame.js";
import resultTypes from "./resultTypes.js";

const showResult = resultType => {
    resultType === resultTypes.NEXT_ROUND ? new NextRound(resultType) : new EndGame(resultType)
}

export default showResult;