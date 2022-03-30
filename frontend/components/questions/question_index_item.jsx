import React from 'react';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.question.id)
    }

    render() {
        return (
            <div className='question-container'>
                <p>{this.props.question.subject}</p>
                <br />
                <p>{this.props.question.body}</p>
                <br />
            </div>
        )
    }
}

export default QuestionIndexItem