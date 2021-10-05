import elements from "../modules/elements.js";

export default class GameBoard {
    constructor() {
        this.helpButtons = $(`.${elements.HELP_BTN}`);
    }
}