import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";
import queryString from 'query-string';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        };
    }
    componentDidMount() {
        let params = queryString.parse(this.props.location.search)
        axios(
            {
                method: 'GET',
                url: `http://localhost:5000/users/getUserById/${params.param}`,
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ userData: response.data })).catch()
    }

    navigateToSignOn = (e) => {
        this.props.history.push(`/signup`)
    }
    navigateToPayments = (e) => {
        this.props.history.push(`/payment`)
    }
    render() {
        const { userData } = this.state;
        return (
            <div className="login-form">
                <div>
                    <button className="signin-button-right" onClick={this.navigateToPayments}>{'LOGOUT'}</button>
                </div>
                <div className="upper">
                    <div className="login-div">
                        <div className="loginhome">
                            <div className="new-members">
                                <h1>{'Member Details Page'}</h1>

                                <p>
                                    <span className='left-align'>{`Name: ${userData.name}`}</span>
                                    <span className='right-align'>{`email: ${userData.email}`}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{`Address: ${userData.address}`}</span>
                                    <span className='right-align'>{`Phone: ${userData.phone}`}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{`Guardian: ${userData.guardianName}`}</span>
                                    <span className='right-align'>{`Guardian Phone: ${userData.guardianPhone}`}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{`Guardian Address: ${userData.guardianAddress}`}</span>
                                    <span className='right-align'>{`Guardian email: ${userData.guardianAddress}`}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{`UID: ${userData.uid}`}</span>
                                    <span className='right-align'>{`Registration Date: ${userData.registrationDate}`}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{`Institution Name: ${userData.institution}`}</span>
                                    <span className='right-align'>{`Course: ${userData.course}`}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{`Father's Name: ${userData.fatherName}`}</span>
                                    <span className='right-align'>{`Father's's Phone: ${userData.fatherPhone}`}</span>
                                    <br />
                                </p>
                            </div>
                            <div>
                                <button className="signin-button-left" onClick={this.navigateToPayments}>{'Payment Details'}</button>
                            </div>
                        </div>
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