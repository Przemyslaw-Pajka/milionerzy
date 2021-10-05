import elements from "../../elements.js";

const generateChartBlocks = () => {
    const thecount = document.querySelectorAll(`.${elements.GAME_WRAPPER_ANSWERS_ITEM}:not(.disabled)`).length;
    const percentageBlock =
        `<div class="game-wrapper__percentage-block">
        <div class="game-wrapper__percentage-bar"></div>
        <div class="game-wrapper__percentage-text"></div>
    </div>`;

    for (let i = 0; i < thecount; i++) {
        $(".game-wrapper__percentage").append(percentageBlock)
    }
}

export default generateChartBlocks;