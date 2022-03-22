import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';

const App = () => {
    return (
        <div className='app-container'>
            <header className='header'>
                <Link className="home-link" to='/'><img className='header-logo' src={window.logo}></img><p>stack </p><strong>runnethOver</strong></Link>
                <br />
                <GreetingContainer />
            </header>

            <Switch>
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                <Route exact path='/' component={Splash}/>
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default App;