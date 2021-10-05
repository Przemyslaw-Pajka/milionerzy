import getPlayerName from './getPlayerName.js';

const checkPlayerNameExists = () => {
    const isPlayerNameExists = getPlayerName() ?? null;

    return isPlayerNameExists;
}

export default checkPlayerNameExists