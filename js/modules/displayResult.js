import messages from './messages.js';
import { getGameStateFromDB } from '../classes/GameState.js';

const displayResult = async (resultType) => {
    const { correctAnswer } = await getGameStateFromDB();
    const gameWrapperInfo = $('.game-wrapper__info');
    messages.looseGame += correctAnswer
    const messageToDisplay = messages[resultType]

    gameWrapperInfo.append(messageToDisplay)

}

export default displayResult;