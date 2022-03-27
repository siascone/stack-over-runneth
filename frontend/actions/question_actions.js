import * as QuestionAPIUtil from '../util/questions_api_util'

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


const receiveAllQuestions = (questions) => {
    return {
        type: RECEIVE_ALL_QUESTIONS,
        questions
    }
}

const receiveQuestion = (payload) => {
    return {
        type: RECEIVE_QUESTION,
        payload
    }
}

const removeQuestion = (questionId) => {
    return {
        type: REMOVE_QUESTION,
        questionId
    }
}

const receiveQuestionErrors = (errors) => {
    return {
        type: RECEIVE_QUESTION_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const fetchAllQuestions = () => (dispatch) => {
    return QuestionAPIUtil.fetchAllQuestions()
        .then(questions => {
            return dispatch(receiveAllQuestions(questions))
        }, errors => {
            return dispatch(receiveQuestionErrors(errors))
        })
}

export const fetchQuestion = (answerId) => (dispatch) => {
    return QuestionAPIUtil.fetchQuestion(answerId)
        .then(payload => {
            return dispatch(receiveQuestion(payload))
        }, errors => {
            return dispatch(receiveQuestionErrors(errors))
        })
}

export const createQuestion = (question) => (dispatch) => {
    return QuestionAPIUtil.createQuestion(question)
        .then(question => {
            return dispatch(receiveQuestion(question))
        }, errors => {
            return dispatch(receiveQuestionErrors(errors))
        })
}

export const updateQuestion = (question) => (dispatch) => {
    return QuestionAPIUtil.updateQuestion(question)
        .then(question => {
            return dispatch(receiveQuestion(question))
        }, errors => {
            return dispatch(receiveQuestionErrors(errors))
        })
}

export const deleteQuestion = (questionId) => (dispatch) => {
    return QuestionAPIUtil.deleteQuestion(questionId)
        .then(question => {
            return dispatch(removeQuestion(question.id))
        }, errors => {
            return dispatch(receiveQuestionErrors(errors))
        })
}