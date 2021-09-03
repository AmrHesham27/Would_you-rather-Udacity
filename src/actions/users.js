export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_USERS = 'ADD_QUESTION_USERS';
export const ADD_ANSWER_USERS = 'ADD_ANSWER_USERS';

export function receive_Users(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestion_Users (authedUser, qid) {
    return {
      type: ADD_QUESTION_USERS,
      authedUser,
      qid
    }
  }

export function addAnswer_Users (authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_USERS,
    authedUser,
    qid,
    answer
  }
}