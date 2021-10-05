import cleanAnswerContainer from './cleanAnswerContainer.js';
import getWrongAndCorrectAnswer from './getWrongAndCorrectAnswer.js';
import elements from '../../elements.js';

class FiftyFifty {
   constructor() {
      const gameAnswersContainers = document.getElementsByClassName(elements.GAME_WRAPPER_ANSWERS_ITEM);

      (async () => {
         const wrongAndCorrectAnswer = await getWrongAndCorrectAnswer()

         for (let gameAnswersContainer of gameAnswersContainers) {
            const isContains = wrongAndCorrectAnswer.includes(gameAnswersContainer.textContent);

            if (!isContains)
               cleanAnswerContainer(gameAnswersContainer)
         }
      })()
   }
}

export default FiftyFifty;