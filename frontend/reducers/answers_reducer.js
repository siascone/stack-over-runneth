import {
    RECEIVE_ALL_ANSWERS, 
    RECEIVE_ANSWER, 
    REMOVE_ANSWER
} from '../actions/answer_actions'
import { RECEIVE_QUESTION } from '../actions/question_actions'

const answersReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_QUESTION:
            return Object.assign({}, nextState, action.payload.answers);
        case RECEIVE_ALL_ANSWERS:
            return Object.assign({}, nextState, action.answers)
        case RECEIVE_ANSWER:
            nextState[action.answer.id] = action.answwer
            return nextState
        case REMOVE_ANSWER:
            delete nextState[action.action.id];
            return nextState;
        default:
            return state
    }
}

export default answersReducer;