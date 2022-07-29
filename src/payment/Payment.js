import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSuccessModal: false
        };
    }

    handleSignUp = (e) => {
    }
    navigateToSignOn = (e) => {
        this.props.history.push(`/signup`)
    }
    render() {
        return (
            <div className="login-form">
                <div className="upper">
                    <div className="login-div">
                        <div className="loginhome" onSubmit={this.handleSignUp}>

                            <div className="new-members">
                                <h1>{'Payment Details Page'}</h1>
                                <p>
                                    <span className='left-align'>{'Name: Natasha Mishra'}</span>
                                    <span className='right-align'>{'email: natasha@gmail.com'}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{'Address: D003, Harsha Pride Apartment, Ranchi'}</span>
                                    <span className='right-align'>{'Phone: 9874528028'}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{'Guardian: Mr. Lalit Prasad'}</span>
                                    <span className='right-align'>{'Guardian Phone: 9874528028'}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{'Guardian Address: D003, Harsha Pride Apartment, Ranchi'}</span>
                                    <span className='right-align'>{'Guardian email: guardian@gmail.com'}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{'UID: 995687482154'}</span>
                                    <span className='right-align'>{'Registration Date: 01-08-2022'}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{`College Name: Women's College`}</span>
                                    <span className='right-align'>{'Course: B.COM'}</span>
                                    <br />
                                </p>
                                <p>
                                    <span className='left-align'>{`Father's Name: Ram Prasad`}</span>
                                    <span className='right-align'>{`Father's's Phone: 9865986555`}</span>
                                    <br />
                                </p>
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

export default withRouter(Payment);