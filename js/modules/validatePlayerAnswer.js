import { getGameStateFromDB } from "../classes/GameState.js";
import resultTypes from "./resultTypes.js";

export default async function validatePlayerAnswer(playerAnswer, selectedResponseCell) {
    const { correctAnswer, roundCounter } = await getGameStateFromDB();
    const isCorrect = playerAnswer.includes(correctAnswer);
    const isLastRound = roundCounter === 11;

    if (isCorrect && isLastRound) {
        return resultTypes.WIN_GAME
    }
    if (isCorrect) {
        $(selectedResponseCell).addClass('correct');
        return resultTypes.NEXT_ROUND
    }
    if (!isCorrect) {
        $(selectedResponseCell).addClass('incorrect');
        return resultTypes.LOOSE_GAME
    }
}