import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        if (this.props.formType === 'Sign Up') {
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

        let username = null
        let br = null
        if (this.props.formType === 'Sign Up') {
            username = <label>Display name: 
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
            br = <br />
        }

        return(
            <div className='session-container'>
                {/* <img className='form-logo' src={window.logo}></img> */}
                <form className='session-form' onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <br />
                    <div>
                        {username}
                        {br}
                        <label>email: 
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                             />
                        </label>
                        <br />                        
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