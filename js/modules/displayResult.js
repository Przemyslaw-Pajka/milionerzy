import messages from './messages.js';
import { getGameStateFromDB } from '../classes/GameState.js';
import resultTypes from './resultTypes.js';

const displayResult = async (resultType) => {
    const { correctAnswer } = await getGameStateFromDB();
    const gameWrapperInfo = $('.game-wrapper__info');
    const messageToDisplay = messages[resultType] + correctAnswer

    gameWrapperInfo.append(messageToDisplay)
}

export default displayResult;