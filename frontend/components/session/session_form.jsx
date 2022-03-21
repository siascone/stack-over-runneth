import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        if (this.props.formType === 'Sign Up') {
            this.state = {
                username: '',
                email: '',
                password: ''
            }
        } else {
            this.state = {
                username: '',
                password: ''
            };
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
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

        let email = null
        let br = null
        if (this.props.formType === 'Sign Up') {
            email = <label>Email: 
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
            br = <br />
        }

        return(
            <div className='session-container'>
                <form onSubmit={this.handleSubmit}>
                    Welcome to Stack OverRunneth
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <br />
                    <div>
                        <label>Username: 
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                             />
                        </label>
                        <br />
                        {email}
                        {br}
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')} />
                        </label>
                        <br />
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm