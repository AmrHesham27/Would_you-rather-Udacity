export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_QUESTIONS = 'ADD_QUESTION_QUESTIONS';
export const ADD_ANSWER_QUESTIONS = 'ADD_ANSWER_QUESTIONS';

export function receive_Questions(questions){
  return{
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion_Questions (question) {
  return {
    type: ADD_QUESTION_QUESTIONS,
    question
  }
}

export function addAnswer_Questions(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_QUESTIONS,
    authedUser,
    qid,
    answer
  }
}