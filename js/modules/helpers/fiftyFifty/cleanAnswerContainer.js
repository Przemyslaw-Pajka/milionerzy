const cleanAnswerContainer = (gameAnswersContainer) => {
    gameAnswersContainer.textContent = ''
    gameAnswersContainer.classList.add('disabled')
    gameAnswersContainer.disabled = true;
}

export default cleanAnswerContainer;