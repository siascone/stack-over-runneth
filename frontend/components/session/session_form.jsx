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

        let username = null
        let options_link = <p>Don't have an account? <Link to='/signup' className='session-options-link'>Sign up</Link></p>
        if (this.props.formType === 'Sign up') {
            username = <div className='session-input-container'>
                            <label className='session-label' htmlFor='username'>Display name</label>
                            <input className='session-input' 
                                id='username'
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                       </div>
            options_link = <p>Already have an account? <Link to='/login' className='session-options-link'>Log in</Link></p>

        }

        return(
            <div className='session'>
                <img className='session-form-logo' src={window.logo}></img>
                <div className='session-container'>
                    {/* <img className='form-logo' src={window.logo}></img> */}
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <div>
                            {username}
                            <div className='session-input-container'>
                                <label className='session-label' htmlFor='email'>Email</label>
                                <input className='session-input'
                                    id='email'
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </div>

                            <div className='session-input-container'>
                                <label className='session-label' htmlFor='password'>Password</label>
                                <input className='session-input'
                                    id="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')} 
                                />
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