import startGame from './startGame.js';
import elements from './elements.js';

export default {
    replayBtn: document.createElement('button'),
    init() {
        $(this.replayBtn).addClass(elements.PLAY_BTN),
            $(this.replayBtn).text('Zagraj ponownie'),
            $(this.replayBtn).click(() => {
                startGame();
            })
        return this.replayBtn;
    }
}