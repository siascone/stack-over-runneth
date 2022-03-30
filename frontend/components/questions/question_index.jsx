import React from 'react';

import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllQuestions()
    }

    render() {
        return (
            <div className='question-index-container'>
                <ul>
                    {
                        this.props.questions.map(question => {
                            return <QuestionIndexItem question={question} key={question.id} fetchQuestion={this.props.fetchQuestion} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default QuestionIndex