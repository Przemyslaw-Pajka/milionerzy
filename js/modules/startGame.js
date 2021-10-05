import { GameState, saveGameStateToDB } from '../classes/GameState.js';
import { GameBoardAtStart } from '../classes/GameBoardAtStart.js';
import { GameBoardAtNewRound } from '../classes/GameBoardAtNewRound.js';

export default async () => {
    let currentGameState = await new GameState();

    saveGameStateToDB(currentGameState)
    new GameBoardAtStart()
    new GameBoardAtNewRound();
}