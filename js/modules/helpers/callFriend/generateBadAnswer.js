import { getGameStateFromDB } from "../../../classes/GameState.js";

const generateBadAnswer = async () => {
    const { correctAnswer, answers } = await getGameStateFromDB();
    const repeatGenerateBadAnswer = generateBadAnswer;
    let randomNumber = Math.round(Math.random() * (answers.length - 1));

    if (answers[randomNumber] === correctAnswer)
        return repeatGenerateBadAnswer();

    return answers[randomNumber];
}

export default generateBadAnswer;