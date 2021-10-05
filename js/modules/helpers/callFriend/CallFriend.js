import Hint from "./Hint.js";
import BadHint from "./BadHint.js";

class CallFriend {
    constructor() {
        const chance = Math.round(Math.random() * 99 + 1);
        let isThisCorrectHint = (chance <= 70);

        isThisCorrectHint ? new Hint(isThisCorrectHint) : new BadHint(isThisCorrectHint)
    }
}

export default CallFriend