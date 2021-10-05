import { getGameStateFromDB } from "../../../classes/GameState.js";

const getWrongAndCorrectAnswer = async () => {
    const { correctAnswer, answers } = await getGameStateFromDB();
    const randNumb = Math.round(Math.random() * 2)

    const wrongAnswers = answers.filter(answer => {
        const isAnswerCorrect = answer === correctAnswer;

        if (!isAnswerCorrect) {
            const wrongAnswer = answer;
            return wrongAnswer;
        }
    })

    return [wrongAnswers[randNumb], correctAnswer];
}

export default getWrongAndCorrectAnswer;