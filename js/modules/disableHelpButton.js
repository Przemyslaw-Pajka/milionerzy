import elements from "./elements.js";

const disableThisHelpButton = (button) => {
    $(button).prop('disabled', true);
    $(button).addClass(elements.HELP_BTN_USED);
}

export default disableThisHelpButton;