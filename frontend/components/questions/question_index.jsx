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
            <div className='questions-container'>
                <div className='questions-left-nav'>
                    Left Side Nav
                </div>

                <div className='questions-index-container'>
                    <div className='questions-index-header'>
                        <div className='questions-index-header-row-1'>
                            <p>All Questions</p>
                            <button className='ask-question-btn'>Ask Queston</button>
                        </div>
                        <div className='questions-index-header-row-2'>
                            {this.props.questions.length} questions
                        </div>
                        <div className='horizontal-rule'>

                        </div>
                    </div>
                    <div className='questions-index'>
                        {
                            this.props.questions.map(question => {
                                return <QuestionIndexItem question={question} key={question.id} fetchQuestion={this.props.fetchQuestion} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionIndex