import generateBadAnswer from "./generateBadAnswer.js"
import Hint from "./Hint.js"

export default class BadHint {
    constructor(isThisCorrectHint) {
        (async function () {
            const badAnswer = await generateBadAnswer()

            new Hint(isThisCorrectHint, badAnswer)
        })()
    }
}