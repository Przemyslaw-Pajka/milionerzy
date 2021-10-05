import helpers from '../modules/helpers/helpers.js'
import disableThisHelpButton from '../modules/disableHelpButton.js';
import { HelpButtons } from './HelpButtons.js';

export default class HelpButtonsClickListener extends HelpButtons {
    constructor() {
        super()

        $(this.helpBtns).on('click', function ({ currentTarget }) {
            const typeOfHelp = currentTarget.getAttribute('data-help-type')

            helpers.call(typeOfHelp);
            disableThisHelpButton(this)
        })
    }
}