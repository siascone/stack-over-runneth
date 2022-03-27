import { 
    RECEIVE_QUESTION, 
    RECEIVE_ALL_QUESTIONS, 
    REMOVE_QUESTION 
} from "../actions/question_actions";

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign({}, nextState, action.questions)
        case RECEIVE_QUESTION:
            nextState[action.payload.question.id] = action.payload.question;
            return nextState;
        case REMOVE_QUESTION:
            delete nextState[action.questionId];
            return nextState;
        default:
            return state
    }
}

export default questionsReducer;