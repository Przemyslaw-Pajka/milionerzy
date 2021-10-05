const generateRandomQuestionsSet = async (questions) => {
    const repeatGenerateRandomSet = generateRandomQuestionsSet;
    const questionsSet = Math.round(Math.random() * (questions.length - 1));
    const oldQuestionsSet = parseInt(localStorage.getItem('oldQuestionsSet'))
    const isTheSameQuestionsSet = questionsSet === oldQuestionsSet;

    if (isTheSameQuestionsSet)
        return repeatGenerateRandomSet(questions);

    localStorage.setItem('oldQuestionsSet', questionsSet);

    return questions[questionsSet];
}

export default generateRandomQuestionsSet;