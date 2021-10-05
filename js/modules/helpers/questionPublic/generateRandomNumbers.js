import randomBetween from "./randomBetween.js";

const generateRandomNumbers = () => {
    const thecount = 4;
    const maximumNumberOfVotes = 100;
    let currsum = 0;
    let percentageValues = [];

    for (let i = 0; i < thecount - 1; i++) {
        percentageValues[i] = randomBetween(1, maximumNumberOfVotes - (thecount - i - 1) - currsum);
        currsum += percentageValues[i];
    }

    percentageValues[thecount - 1] = maximumNumberOfVotes - currsum;

    return percentageValues;
}

export default generateRandomNumbers;