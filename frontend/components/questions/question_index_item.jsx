import React from 'react';
import { Link } from 'react-router-dom'

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        if (this.props.question) {
            this.props.fetchQuestion(this.props.question.id)
        } else {
            this.props.fetchQuestion(this.props.match.params.questionId)
        }
    }

    render() {

        if (!this.props.question) {
            return null
        }

        return (
            <div className='question-container'>
                <Link to={`questions/${this.props.question.id}`}
                    className="question-link"
                >{this.props.question.subject}</Link>
                
                <p>{this.props.question.body}</p>
                <br />
            </div>
        )
    }
}

export default QuestionIndexItem