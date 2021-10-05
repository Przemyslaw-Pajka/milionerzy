import { PlayBtn } from "./PlayBtn.js";
import checkPlayerNameExists from '../modules/checkPlayerNameExists.js';
import startGame from '../modules/startGame.js';

export class PlayBtnClickListener extends PlayBtn {
    constructor() {
        super()

        this.playBtn.addEventListener('click', () => {
            const isPlayerNameExists = checkPlayerNameExists()

            if (isPlayerNameExists)
                startGame();
        })
    }
}