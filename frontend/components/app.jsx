import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom'

import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';

const App = () => {
    return (
        <div>

            
            <header>
                <h1>Stack OverRunneth</h1>
                <Link to='/'>Stack OverRunneth</Link>
                <br />
                <GreetingContainer />
            </header>

            <Switch>
                <Route exact path='/login' component={LoginFormContainer} />
                <Route exact path='/singup' component={SignupFormContainer} />
                <Route exact path='/' component={Splash}/>
            </Switch>
        </div>
    )
}

export default App;