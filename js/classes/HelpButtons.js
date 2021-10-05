import elements from '../modules/elements.js';
import enableUsedHelpButtons from '../modules/enableUsedHelpButtons.js';

export class HelpButtons {
    constructor() {
        this.helpBtns = $(`.${elements.HELP_BTN}`);
        $(this.helpBtns).off()
        enableUsedHelpButtons();
    }
}