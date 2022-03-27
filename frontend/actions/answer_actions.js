import * as AnswerAPIUtil from '../util/answers_api_util'

export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveAllAnswers = (answers) => {
    return {
        type: RECEIVE_ALL_ANSWERS,
        answers
    }
}

const receiveAnswer = (answer) => {
    return {
        type: RECEIVE_ANSWER,
        answer
    }
}

const removeAnswer = (answerId) => {
    return {
        type: REMOVE_ANSWER,
        answerId
    }
}

const receiveAnswerErrors = (errors) => {
    return {
        type: RECEIVE_ANSWER_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const fetchAllAnswers = () => (dispatch) => {
    return AnswerAPIUtil.fetchAllAnswers()
        .then(questions => {
            return dispatch(receiveAllAnswers(questions))
        }, errors => {
            return dispatch(receiveAnswerErrors(errors))
        })
}

export const fetchAnswer = (answerId) => (dispatch) => {
    return AnswerAPIUtil.fetchAnswer(answerId)
        .then(payload => {
            return dispatch(receiveAnswer(payload))
        }, errors => {
            return dispatch(receiveAnswerErrors(errors))
        })
}

export const createAnswer = (question) => (dispatch) => {
    return AnswerAPIUtil.createAnswer(question)
        .then(question => {
            return dispatch(receiveAnswer(question))
        }, errors => {
            return dispatch(receiveAnswerErrors(errors))
        })
}

export const updateAnswer = (question) => (dispatch) => {
    return AnswerAPIUtil.updateAnswer(question)
        .then(question => {
            return dispatch(receiveAnswer(question))
        }, errors => {
            return dispatch(receiveAnswerErrors(errors))
        })
}

export const deleteAnswer = (questionId) => (dispatch) => {
    return AnswerAPIUtil.deleteAnswer(questionId)
        .then(question => {
            return dispatch(removeAnswer(question.id))
        }, errors => {
            return dispatch(receiveAnswerErrors(errors))
        })
}