import { getGameStateFromDB } from "../../../classes/GameState.js";

export default class Hint {
    constructor(isThisCorrectHint, badAnswer) {
        (async function () {
            const { correctAnswer } = isThisCorrectHint ? await getGameStateFromDB() : { correctAnswer: null };
            const phoneFriendWrapper = $('#game-wrapper__phone-friend');
            const hint = 'Myślę, że poprawna odpowiedź to ';

            const message = isThisCorrectHint ? `${hint} "${correctAnswer}"` : `${hint} "${badAnswer}"`
            $(phoneFriendWrapper).append(message);
        })()
    }
}