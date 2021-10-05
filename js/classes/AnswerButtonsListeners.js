import gameSounds from '../modules/gameSounds.js';
import { GameBoardAfterAnswer } from './GameBoardAfterAnswer.js';
import elements from '../modules/elements.js';
import simulateWaitingForAnswer from '../modules/simulateWaitingForAnswer.js';

export default class AnswerButtonsListeners {
    constructor() {
        $(`.${elements.GAME_WRAPPER_ANSWERS_ITEM}`).on('click', function ({ currentTarget }) {
            const selectedAnswer = $(this).text();

            gameSounds.checkAnswer.play();
            new GameBoardAfterAnswer(currentTarget);
            simulateWaitingForAnswer(selectedAnswer, currentTarget);
        });
        return false;
    }
}