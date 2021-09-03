import {RECEIVE_QUESTIONS, ADD_QUESTION_QUESTIONS, ADD_ANSWER_QUESTIONS} from '../actions/questions'

export default function questions (state = {}, action){
  switch(action.type){
    
    // get questions from api
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };

    // add question to the list of all question
    case ADD_QUESTION_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    // add question Answer so change one question object
    // (addAnswer_Questions(authedUser, qid, answer)
    case ADD_ANSWER_QUESTIONS:
      const votes = state[action.qid][action.answer].votes
      return {
        ...state,
        [action.qid]:{
          ...state[action.qid],
          [action.answer]:{
            ...state[action.qid][action.answer],
            votes: votes.concat([action.authedUser])
          }
        }
      };
    default:
      return state
  }
}