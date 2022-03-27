import { RECEIVE_ANSWER_ERRORS, CLEAR_ERRORS } from "../actions/answer_actions";

const answerErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ANSWER_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default answerErrorsReducer;