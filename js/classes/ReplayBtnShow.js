import replayBtn from "../modules/replayBtn.js";

class ReplayBtnShow {
    constructor() {
        const replayBtnComponent = replayBtn.init();
        const gameWrapperInfo = $('.game-wrapper__info');
        $(gameWrapperInfo).append(replayBtnComponent)
    }
}
export default ReplayBtnShow;