import elements from "./elements.js";

const enableUsedHelpButtons = () => {
    $(`.${elements.HELP_BTN_USED}`).prop('disabled', false);
    $(`.${elements.HELP_BTN}`).removeClass(elements.HELP_BTN_USED);
}
export default enableUsedHelpButtons;