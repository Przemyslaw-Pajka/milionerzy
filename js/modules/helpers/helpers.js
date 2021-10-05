import FiftyFifty from './fiftyFifty/FiftyFifty.js';
import QuestionPublic from './questionPublic/QuestionPublic.js';
import CallFriend from './callFriend/CallFriend.js';

export default {
   call: (typeOfHelp) => {
      console.log(typeOfHelp)
      switch (typeOfHelp) {
         case 'fiftyFifty': new FiftyFifty; break;
         case 'questionPublic': new QuestionPublic; break;
         case 'callFriend': new CallFriend(); break;
      }
   },
}