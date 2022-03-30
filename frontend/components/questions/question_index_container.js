import { connect } from 'react-redux';
import { fetchQuestion, fetchAllQuestions } from '../../actions/question_actions';
import QuestionIndex from './question_index'

const mapSTP = (state) => {
    return {
        questions: Object.values(state.entities.questions)
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        fetchAllQuestions: () => dispatch(fetchAllQuestions())
    }
}

export default connect(mapSTP, mapDTP)(QuestionIndex)