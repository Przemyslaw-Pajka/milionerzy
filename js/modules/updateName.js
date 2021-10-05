import getPlayerName from "./getPlayerName.js";
import elements from "./elements.js";

const updateName = {
    inLoginScreen() {
        const lastUsedPlayersName = localStorage.getItem('playerNick');
        $(`#${elements.NICK_INPUT}`).val(lastUsedPlayersName);
    },
    inGameScreen() {
        const playerName = getPlayerName();
        localStorage.setItem('playerNick', playerName)
        $(`#${elements.PLAYER_NAME_WRAPPER}`).text(playerName)
    }
}

export default updateName;