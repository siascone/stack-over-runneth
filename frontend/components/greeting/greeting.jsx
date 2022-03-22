import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => {
        return (
            <div className='greeting-links'>
                <Link className='login-button' to='/login'>Log in</Link>
                <br />
                <Link className='signup-button' to='/signup'>Sign up</Link>
            </div>
        )
    }

    const personalGreeting = () => {
        return (
            <div className='greeting-message'>
                <h2>Hello, {currentUser.username}</h2>
                <button className='greeting-logout' onClick={logout}>Log Out</button>
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