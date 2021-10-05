const giveTheMostPercentForCorrectAnswer = (percentageValues, to) => {
    const largest = Math.max.apply(Math, percentageValues);
    const from = percentageValues.indexOf(largest);

    percentageValues.splice(to, 0, percentageValues.splice(from, 1)[0]);

    return [...percentageValues];
}

export default giveTheMostPercentForCorrectAnswer;