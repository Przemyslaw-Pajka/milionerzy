import elements from './elements.js';

export const saveActuallyUsedPlayerName = () => {
    const actuallyUsedPlayerName = document.getElementById(elements.NICK_INPUT).value;
    localStorage.setItem('playerNick', actuallyUsedPlayerName);
}