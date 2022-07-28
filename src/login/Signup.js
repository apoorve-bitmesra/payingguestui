import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSuccessModal: false
        };
    }

    handleSignUp = (e) => {
        this.props.history.push(`/details?resturant`)
        e.preventDefault();
    }
    navigateToSignIn = (e) => {
        this.props.history.push(`/`)
        e.preventDefault();
    }
    render() {
        return (
            <div className="login-form">
                <div className="upper">
                    <div className="login-div">
                        <form className="login" onSubmit={this.handleSignUp}>
                            <h1>{'Sign Up'}</h1>
                            <div className="input-text">
                                <input type="text" id="inputPhone" name="phone" placeholder="Phone number" />
                                <div className="warning-input" id="warningEmail">
                                    {'Please enter a valid phone number.'}
                                </div>
                            </div>
                            <div className="input-text">
                                <input type="text" id="inputEmail" name="email" placeholder="Email" />
                                <div className="warning-input" id="warningEmail">
                                    {'Please enter a valid email.'}
                                </div>
                            </div>
                            <div className="input-text">
                                <input type="text" id="inputName" name="name" placeholder="Full Name" />
                                <div className="warning-input" id="warningEmail">
                                    {'Please enter a valid name.'}
                                </div>
                            </div>
                            <div className="input-text">
                                <input type="text" id="inputUID" name="name" placeholder="UID - Aadhar Number" />
                                <div className="warning-input" id="warningEmail">
                                    {'Please enter a valid UID.'}
                                </div>
                            </div>
                            <div className="input-text">
                                <input type="text" id="inputAddress" name="address" placeholder="Parmanent Address" />
                                <div className="warning-input" id="warningEmail">
                                    {'Please enter a valid Address.'}
                                </div>
                            </div>
                            <div className="input-text">
                                <input type="text" id="inputCollege" name="address" placeholder="College/Institution Name" />
                                <div className="warning-input" id="warningEmail">
                                    {'Please enter a valid College Name.'}
                                </div>
                            </div>
                            <div className="input-text">
                                <input type="password" id="inputPassword" name="password" placeholder="Password" />
                                <div className="warning-input" id="warningPassword">
                                    {'Your password must contain between 4 and 60 characters.'}
                                </div>
                            </div>
                            <div>
                                <button className="signin-button">{'Sign Up'}</button>
                            </div>
                            <div className="remember-flex">
                                <div className="help">
                                    <a className="color_text" href="#">{'Need help?'}</a>
                                </div>
                            </div>
                            <div className="login-face">
                            </div>
                            <div className="new-members">
                                {'Already a Paying Guest? '}<a onClick={this.navigateToSignIn} className="signup-link">{'Sign in now'}</a>.
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

export default withRouter(Signup);