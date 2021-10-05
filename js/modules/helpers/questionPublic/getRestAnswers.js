import elements from "../../elements.js"

const getRestAnswers = () => {
    const gameWrapperAnswersBtns = document.querySelectorAll(`.${elements.GAME_WRAPPER_ANSWERS_ITEM}:not(.disabled)`)
    const answers = [...gameWrapperAnswersBtns].map(answer => answer.textContent)

    return answers;
}


export default getRestAnswers;