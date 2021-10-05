import elements from "./elements.js";

const cleanBoard = () => {
    const elementsToClear = $("#game-wrapper__info,#game-wrapper__percentage,#game-wrapper__phone-friend");
    const helpBtnNotUsed = $(`.${elements.HELP_BTN}:not(.${elements.HELP_BTN_USED})`);

    $(`.${elements.GAME_WRAPPER_ANSWERS_ITEM}`).removeClass('clicked correct incorrect');
    helpBtnNotUsed.prop('disabled', false);

    [...elementsToClear].forEach(element => $(element).text(""));
}

export default cleanBoard;