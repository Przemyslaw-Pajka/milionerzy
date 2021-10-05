import GameBoard from "./GameBoard.js";
import elements from "../modules/elements.js";
import disableBtns from "../modules/disableBtns.js";

export class GameBoardAfterAnswer extends GameBoard {
    constructor(selectedResponseCell) {
        const answersBtns = document.getElementsByClassName(elements.GAME_WRAPPER_ANSWERS_ITEM);
        super();

        $(selectedResponseCell).addClass('clicked');
        $(elements.GAME_WRAPPER_ANSWERS_ITEM).off("click");
        disableBtns([...this.helpButtons, ...answersBtns])
    }
}