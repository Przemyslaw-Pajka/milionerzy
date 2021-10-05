import setChance from './setChance.js';
import getRestAnswers from './getRestAnswers.js';
import { getGameStateFromDB } from '../../../classes/GameState.js';
import generateRandomNumbers from './generateRandomNumbers.js';
import displayAnswers from './displayAnswers.js';

const animateChart = async () => {
    const { correctAnswer } = await getGameStateFromDB()
    const answers = await getRestAnswers();
    let percentageValues = generateRandomNumbers()

    percentageValues = setChance(percentageValues, correctAnswer, answers);
    displayAnswers(percentageValues, answers)
}

export default animateChart;