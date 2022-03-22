import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const mSTP = ({errors}) => {
    return {
        errors: errors.sessionErrors,
        formType: 'Sign up',
        navLink: <Link to="/signup">log in instead</Link>
    };
};

const mDTP = (dispatch) => {
    return {
        submitForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoUser: () => dispatch(login({ email: 'william@shakespeare.com', password: 'theTempest'}))
    }
}

export default connect(mSTP, mDTP)(SessionForm)