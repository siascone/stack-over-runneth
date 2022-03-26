import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createQuestion, deleteQuestion, fetchAllQuetions, fetchQuestion, updateQuestion } from './util/questions_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState)
    } else {
        store = configureStore();
    }
    window.getState = store.getState
    window.createQuestion = createQuestion
    window.fetchAllQuestions = fetchAllQuetions
    window.fetchQuestion = fetchQuestion
    window.updateQuestion = updateQuestion
    window.deleteQuestion = deleteQuestion
    ReactDOM.render(<Root store={store} />, root)
});