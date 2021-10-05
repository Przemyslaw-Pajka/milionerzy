import ResultShape from "./ResultShape.js";
import ReplayBtnShow from "./ReplayBtnShow.js";
import elements from "../modules/elements.js";

class EndGame extends ResultShape {
    constructor(resultType) {
        super(resultType);
        new ReplayBtnShow;
        $(`.${elements.GAME_WRAPPER_ANSWERS_ITEM}`).off()
    }
}

export default EndGame;