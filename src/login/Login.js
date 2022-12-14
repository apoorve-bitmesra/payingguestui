import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
            isError: false
        };
    }

    handleSignUp = (e) => {
        const { phone, password } = this.state;
        const payload = {
            "phone": phone,
            "password": window.btoa( password )
        };
        axios(
            {
                method: 'POST',
                url: `http://localhost:5000/users/validateLogin`,
                headers: { 'Content-Type': 'application/json' },
                data: payload
            }
        ).then(response => response.data === 'Invalid' ? this.setState({ isError: true }) : this.props.history.push(`/home?param=${response.data._id}`)).catch()
        e.preventDefault();
    }

    navigateToSignOn = (e) => {
        this.props.history.push(`/signup`)
        e.preventDefault();
    }
    handleChange = (e, context) => {
        const value = e.target.value;
        switch (context) {
            case 'phone': this.setState({ phone: value })
                break;
            case 'password': this.setState({ password: value })
                break;
            default:
                break;
        }
    }
    render() {
        const {phone, password} = this.state;
        return (
            <div className="login-form">
                <div className="upper">
                    <div className="login-div">
                        <form className="login" onSubmit={this.handleSignUp}>
                            <h1>{'Sign In'}</h1>
                            {this.state.isError ? <h3>{`Invalid User Credentials !!`}</h3> : <></>}
                            <div className="input-text">
                                <input type="text" id="inputEmail" value={phone} onChange={e => this.handleChange(e, 'phone')} name="phone" placeholder="Phone number" />
                                <div className="warning-input" id="warningEmail">
                                    {'Please enter a valid email or phone number.'}
                                </div>
                            </div>
                            <div className="input-text">
                                <input type="password" id="inputPassword" value={password} onChange={e => this.handleChange(e, 'password')} name="password" placeholder="Password" />
                                <div className="warning-input" id="warningPassword">
                                    {'Your password must contain between 4 and 60 characters.'}
                                </div>
                            </div>
                            <div>
                                <button className="signin-button">{'Sign In'}</button>
                            </div>
                            <div className="remember-flex">
                                <div>
                                    <input type="checkbox" />
                                    <label className="color_text">{'Remember me'}</label>
                                </div>
                                <div className="help">
                                    <a className="color_text" href="#">{'Need help?'}</a>
                                </div>
                            </div>
                            <div className="login-face">
                            </div>
                            <div className="new-members">
                                {'New to Paying Guest? '}<a onClick={this.navigateToSignOn} className="signup-link">{'Sign up now'}</a>.
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-width">
                        {'Questions? Call '}<a href="tel:1-844-542-4813" className="tel-link">{'98351 49593'}</a>
                        <div>
                            <ul className="bottom-flex">
                                <li className="list-bottom">
                                    <a href="#" className="link-bottom">
                                        {'FAQ'}
                                    </a>
                                </li>
                                <li className="list-bottom">
                                    <a href="#" className="link-bottom">
                                        {'Help Center'}
                                    </a>
                                </li>
                                <li className="list-bottom">
                                    <a href="#" className="link-bottom">
                                        {'Terms of Use'}
                                    </a>
                                </li>
                                <li className="list-bottom">
                                    <a href="#" className="link-bottom">
                                        {'Privacy'}
                                    </a>
                                </li>
                                <li className="list-bottom">
                                    <a href="#" className="link-bottom">
                                        {'Cookie Preferences'}
                                    </a>
                                </li>
                                <li className="list-bottom">
                                    <a href="#" className="link-bottom">
                                        {'Corporate information'}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <select className="fa select-language">
                                <option> &#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
                                <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Fran&ccedil;ais</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Login);