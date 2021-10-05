import validatePlayerAnswer from '../modules/validatePlayerAnswer.js';
import showResults from '../modules/showResults.js';

const simulateWaitingForAnswer = async (selectedAnswer, currentTarget) => {
    const milisecondsToCheckAnswer = 3000;

    setTimeout(async function () {
        const resultType = await validatePlayerAnswer(selectedAnswer, currentTarget);
        showResults(resultType);
    }, milisecondsToCheckAnswer)
}

export default simulateWaitingForAnswer;