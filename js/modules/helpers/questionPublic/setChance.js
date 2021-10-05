import giveTheMostPercentForCorrectAnswer from './giveTheMostPercentForCorrectAnswer.js';

const setChance = (percentageValues, correctAnswer, answers) => {
    const chance = Math.round(Math.random() * 99 + 1);
    const percentToChooseCorrectAnswer = 70;
    const isThereMustBeCorrectHint = chance <= percentToChooseCorrectAnswer ?? null;
    const indexOfCorrectAnswer = answers.indexOf(correctAnswer);
    let percentageValuesWithCorrectAnswer = [];

    if (isThereMustBeCorrectHint)
        return percentageValuesWithCorrectAnswer = giveTheMostPercentForCorrectAnswer(percentageValues, indexOfCorrectAnswer)

    return percentageValues;
}

export default setChance;