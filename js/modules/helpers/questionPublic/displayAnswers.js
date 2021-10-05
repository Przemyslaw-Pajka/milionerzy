const displayAnswers = (percentageValues, answers) => {
    const percentageBar = $('.game-wrapper__percentage-bar');
    const percentageText = $('.game-wrapper__percentage-text');
    const milisecondsToBarAnimate = 700;

    for (let i in [...percentageBar]) {
        $(percentageBar[i]).animate({ height: `${percentageValues[i]}%` }, milisecondsToBarAnimate);
        $(percentageBar[i]).text(percentageValues[i]);
        $(percentageText[i]).text(answers[i]);
    }
}

export default displayAnswers;