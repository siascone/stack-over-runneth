import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => {
        return (
            <div className='greeting-links'>
                <Link className='login-button' to='/login'>Login</Link>
                <br />
                <Link className='signup-button' to='/signup'>Signup</Link>
            </div>
        )
    }

    const personalGreeting = () => {
        return (
            <div className='greeting-message'>
                <h2>Hello, {currentUser.username}</h2>
                <button onClick={logout}>Log Out</button>
            </div>
        )
    }

    if (currentUser) {
        return personalGreeting();
    } else {
        return sessionLinks();
    }
}

export default Greeting