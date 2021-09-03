import {SET_SHOW_QUESTION} from '../actions/showQuestion'

export default function showQuestion(state=null, action){
    switch (action.type){
        case SET_SHOW_QUESTION:
            return action;
        default :
            return state
    }
}