import elements from "./elements.js";

const enableAnswersBtns = () => {
    const answersBtns = document.getElementsByClassName(elements.GAME_WRAPPER_ANSWERS_ITEM);

    [...answersBtns].forEach(answerBtn => {
        answerBtn.disabled = false;
        answerBtn.classList.remove("disabled");
    })
}

export default enableAnswersBtns;