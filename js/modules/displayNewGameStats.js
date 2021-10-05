import { getGameStateFromDB } from "../classes/GameState.js";

const displayNewGameStats = async () => {
    const { question, roundCounter, targetMoney } = await getGameStateFromDB();

    $('#game-wrapper__question').text(question);
    $('#target-amount__money').text(targetMoney);
    $('#question-number__counter').text(roundCounter + 1);
}

export default displayNewGameStats;