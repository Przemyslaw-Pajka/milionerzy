import { getGameStateFromDB } from "../classes/GameState.js";
import { saveGameStateToDB } from "../classes/GameState.js";

const updateGameState = async () => {
    const currentGameState = await getGameStateFromDB();
    currentGameState.roundCounter += 1;
    const targetMoney = currentGameState.cash[currentGameState.roundCounter].amount;
    const { correctAnswer, question, answers } = currentGameState.questionsAnswersSet[currentGameState.roundCounter]
    const newGameState = { ...currentGameState, correctAnswer, question, answers, targetMoney }

    saveGameStateToDB(newGameState)
}

export default updateGameState;