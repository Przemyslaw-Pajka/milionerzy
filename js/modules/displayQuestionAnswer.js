import { getGameStateFromDB } from "../classes/GameState.js";
import elements from "./elements.js";

export default async function displayQuestionAnswers() {
    const { answers } = await getGameStateFromDB();
    const gameAnswersContainers = document.getElementsByClassName(elements.GAME_WRAPPER_ANSWERS_ITEM);

    answers.forEach((answer, index) => $(gameAnswersContainers[index]).text(answer));
}