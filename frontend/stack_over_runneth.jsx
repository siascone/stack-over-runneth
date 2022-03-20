import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentuser }
            }
        };
        store = configureStore(preloadedState)
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root)
});