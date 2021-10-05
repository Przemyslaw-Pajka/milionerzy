import GameBoard from "./GameBoard.js";
import updateName from "../modules/updateName.js";
import HelpButtonsClickListener from "./HelpButtonsClickListener.js";
import showGameBoard from "../modules/showGameBoard.js";
import AnswerButtonsListeners from "./AnswerButtonsListeners.js";

export class GameBoardAtStart extends GameBoard {
    constructor() {
        super();
        showGameBoard()
        updateName.inGameScreen();
        new HelpButtonsClickListener()
        new AnswerButtonsListeners();
    }
}