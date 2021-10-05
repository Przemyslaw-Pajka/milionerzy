import getGameSound from "../modules/gameSounds.js";
import displayResult from "../modules/displayResult.js";

class ResultShape {
    constructor(resultType) {
        if (this.constructor === ResultShape) {
            throw new TypeError("Can not construct abstract class.");
        }

        getGameSound[resultType].play();
        displayResult(resultType);
    }
}

export default ResultShape;