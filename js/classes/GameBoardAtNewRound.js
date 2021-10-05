import GameBoard from "./GameBoard.js";
import displayNewGameStats from '../modules/displayNewGameStats.js'
import displayQuestionAnswers from '../modules/displayQuestionAnswer.js'
import cleanBoard from "../modules/cleanBoard.js";
import enableAnswersBtns from "../modules/enableAnswersBtns.js";

export class GameBoardAtNewRound extends GameBoard {
    constructor() {
        super();
        cleanBoard();
        displayQuestionAnswers();
        displayNewGameStats();
        enableAnswersBtns()
    }
}


