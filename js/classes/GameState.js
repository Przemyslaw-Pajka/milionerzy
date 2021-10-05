import generateRandomQuestionsSet from '../modules/generateRandomQuestionsSet.js';
import filesNames from '../filesNames.js'

export class GameState {
    constructor() {
        return (async () => {
            this.questionsAnswers = await $.getJSON(filesNames.questionsAnswersFile);
            this.questionsAnswersSet = await generateRandomQuestionsSet(this.questionsAnswers)
            this.cash = await $.getJSON(filesNames.cashFile)
            this.roundCounter = 0;

            return {
                roundCounter: this.roundCounter,
                cash: this.cash,
                targetMoney: this.cash[this.roundCounter].amount,
                questionsAnswersSet: this.questionsAnswersSet,
                question: this.questionsAnswersSet[this.roundCounter].question,
                answers: this.questionsAnswersSet[this.roundCounter].answers,
                correctAnswer: this.questionsAnswersSet[this.roundCounter].correctAnswer
            }
        })();
    }
};

const gameStateLSKey = 'currentGameState'

export const saveGameStateToDB = currentGameState => localStorage.setItem(gameStateLSKey, JSON.stringify(currentGameState))
export const getGameStateFromDB = async () => JSON.parse(localStorage.getItem(gameStateLSKey))
