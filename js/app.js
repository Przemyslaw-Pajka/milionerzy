import updateName from './modules/updateName.js';
import { PlayBtnClickListener } from './classes/PlayBtnClickListener.js';

class App {
    constructor() {
        new PlayBtnClickListener;
        updateName.inLoginScreen();
    }
}

new App();