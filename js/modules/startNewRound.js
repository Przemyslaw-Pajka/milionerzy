import displayQuestionAnswers from './displayQuestionAnswer.js';
import { GameBoardAtNewRound } from '../classes/GameBoardAtNewRound.js';
import AnswerButtonsListeners from '../classes/AnswerButtonsListeners.js'

const startNewRound = () => {
    new GameBoardAtNewRound()
    new AnswerButtonsListeners();
    displayQuestionAnswers();
}

export default startNewRound;