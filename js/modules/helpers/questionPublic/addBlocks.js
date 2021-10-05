const addBlocks = (thecount) => {
    const percentageBlock =
        `<div class="game-wrapper__percentage-block">
        <div class="game-wrapper__percentage-bar"></div>
        <div class="game-wrapper__percentage-text"></div>
    </div>`;

    thecount.forEach(() => $(".game-wrapper__percentage").append(percentageBlock))
}

export default addBlocks;