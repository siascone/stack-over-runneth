import React from 'react';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        if (this.props.formType === 'Sign up') {
            this.state = {
                email: '',
                password: ''
            }
        } else {
            this.state = {
                username: '',
                email: '',
                password: ''
            };
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submitForm(this.state)
            // .then(() => this.props.history.push('/'));
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.demoUser();
    }

    renderErrors() {
        return (
            <ul>
                {
                    this.props.errors.map((error, i) => {
                        return <li key={`error-${i}`}>{error}</li>
                    })
                }
            </ul>
        )
    }

    render() {

        
        // let fields;
        let requiredEmail = '';
        let requiredUsername = '';
        let requiredPassword = '';
        let display_name_duplicate = ''
        // let signupLoginLink
        
        let emailErrorLabel,
        usernameErrorLabel,
        passwordErrorLabel,
        loginErrorsLabel,
        usernameTakenLabel,
        emailTakenLabel = <label></label>;
        
        // let failedLogin
        
        if (this.props.errors.length) {
            // required = 'required';
            
            this.props.errors.forEach(error => {
                // if (error === 'Username can\'t be blank') {
                //     usernameErrorLabel = <label htmlFor='username' className="error-message">Display Name can't be blank</label>
                // }
                
                if (error === 'Username has already been taken') {
                    display_name_duplicate = 'required';
                    requiredUsername = 'required';
                    usernameTakenLabel = <label htmlFor='username' className="error-message">That Display Name has already been taken.</label>
                }
                
                if (error === 'Email can\'t be blank') {
                    requiredEmail = 'required';
                    emailErrorLabel = <label htmlFor='email' className="error-message">Email cannot be empty.</label>
                }
                
                if (error === 'Email has already been taken') {
                    requiredEmail = 'required';
                    emailTakenLabel = <label htmlFor='email' className="error-message">That email has already been used.</label>
                }
                
                if (error === 'Password is too short (minimum is 6 characters)') {
                    requiredPassword = 'required';
                    passwordErrorLabel = <label htmlFor='password' className="error-message">Password is too short: 6 character minimum.</label>
                }
                
                if (error === 'Invalid email or password') {
                    requiredEmail = 'required';
                    requiredPassword = 'required';
                    loginErrorsLabel = <label htmlFor='email' className="error-message">Invalid email or password.</label>
                    // emailErrorLabel = <label htmlFor='email' className="error-message">Email cannot be empty.</label>
                    // passwordErrorLabel = <label htmlFor='password' className="error-message">Password cannot be empty.</label>
                    // failedLogin = 'failed-login'
                }
                
            })
        }
        
        let username = null
        let options_link = <p>Don't have an account? <Link to='/signup' className='session-options-link'>Sign up</Link></p>
        if (this.props.formType === 'Sign up') {
            username = <div className='session-input-container'>
                            <label className='session-label' htmlFor='username'>Display name</label>
                            <input className={`session-input ${requiredUsername} ${display_name_duplicate}`}
                                id='username'
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                            {usernameErrorLabel}
                            {usernameTakenLabel}
                       </div>
            options_link = <p>Already have an account? <Link to='/login' className='session-options-link'>Log in</Link></p>

        }


        return(
            <div className='session'>
                <img className='session-form-logo' src={window.logo}></img>
                <div className='session-container'>
                    {/* <img className='form-logo' src={window.logo}></img> */}
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        {/* {this.renderErrors()} */}
                        {loginErrorsLabel}
                        <div>
                            {username}
                            <div className='session-input-container'>
                                <label className='session-label' htmlFor='email'>Email</label>
                                <input className={`session-input ${requiredEmail}`}
                                    id='email'
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    
                                />
                                {emailErrorLabel}
                                {emailTakenLabel}
                            </div>

                            <div className='session-input-container'>
                                <label className='session-label' htmlFor='password'>Password</label>
                                <input className={`session-input ${requiredPassword}`}
                                    id="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')} 
                                />
                                {passwordErrorLabel}
                            </div>

                            <input className='session-submit-button' type="submit" value={this.props.formType} />
                            <button className='demo-user' onClick={this.demoLogin}>Demo Account</button>
                        </div>
                    </form>
                </div>
                <div className='session-options'>
                    {options_link}
                </div>
            </div>
        )
    }
}

export default SessionForm