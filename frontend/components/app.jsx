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
        <div>

            
            <header className='header'>
                <Link to='/'><h3>stack runnethOver</h3></Link>
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