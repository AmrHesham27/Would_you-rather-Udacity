import { getInitialData } from '../utils/api'
import { receive_Questions, addQuestion_Questions, addAnswer_Questions } from '../actions/questions'
import { receive_Users, addQuestion_Users, addAnswer_Users } from '../actions/users'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

// get intial data from API 
export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions})=> {
                dispatch(receive_Users(users));
                dispatch(receive_Questions(questions));
        })
    }
}

/*
handleAddQuestion function will be fired fire by the user when he add a question 
it should do 2 things
1--change the API 
2--change two portions of the redux store
    1--the questions portion
    2--the users portions 
*/
export function handleAddQuestion (question){
    return(dispatch) => {
        return _saveQuestion(question)
            .then((question) => {
            dispatch(addQuestion_Questions(question));
            dispatch(addQuestion_Users(question.author,question.id));
            })
    }
}

/*
handleAddAnswer
the same logic as above , 
change api and two portions of the state
*/
export function handleAddAnswer (authedUser, qid, answer){
    return(dispatch) => {
        return _saveQuestionAnswer({ authedUser:authedUser, qid:qid, answer:answer })
                .then((authedUser, qid, answer)=>{
                dispatch(addAnswer_Questions(authedUser, qid, answer));
                dispatch(addAnswer_Users (authedUser, qid, answer));
                })
    }
}