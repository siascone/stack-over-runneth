import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => {
        return (
            <div>
                <Link to='/login'>Login</Link>
                <br />
                <Link to='/signup'>Signup</Link>
            </div>
        )
    }

    const personalGreeting = () => {
        return (
            <div>
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