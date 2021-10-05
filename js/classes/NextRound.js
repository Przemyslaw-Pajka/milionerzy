import ResultShape from "./ResultShape.js";
import { GameBoardAtNewRound } from "./GameBoardAtNewRound.js";
import updateGameState from "../modules/updateGameState.js";

class NextRound extends ResultShape {
    constructor(resultType) {
        const milisecondsToShowGameBoardAtNewRound = 2200;
        super(resultType);

        updateGameState();
        setTimeout(function () { new GameBoardAtNewRound() }, milisecondsToShowGameBoardAtNewRound);
    }
}

export default NextRound;