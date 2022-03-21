import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react'

const mSTP = ({ errors }) => {
    return {
        errors: errors.sessionErrors,
        formType: 'Login',
        navLink: <Link to='/signup'>sign up instead</Link>
    };
};

const mDTP = (dispatch) => {
    return {
        submitForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)