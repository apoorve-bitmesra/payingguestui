import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage1: true,
            stage2: false,
            name: '',
            uid: '',
            email: '',
            phone: '',
            address: '',
            institution: '',
            password: '',
            course: '',
            guardianName: '',
            guardianPhone: '',
            guardianEmail: '',
            guardianAddress: '',
            fatherName: '',
            fatherPhone: '',
            responseData: ''
        };
    }

    handleSignUp = (e) => {
        let date = new Date()
        let registrationDate = date.getDate() + '/' +(date.getMonth()+1) + '/' +  date.getFullYear();
        const {
            name,
            uid,
            email,
            phone,
            address,
            institution,
            password,
            course,
            guardianName,
            guardianPhone,
            guardianEmail,
            guardianAddress,
            fatherName,
            fatherPhone } = this.state;
        const payload = {
            "name": name,
            "uid": uid,
            "email": email,
            "phone": phone,
            "address": address,
            "institution": institution,
            "password": window.btoa( password ),
            "course": course,
            "guardianName": guardianName,
            "guardianPhone": guardianPhone,
            "guardianEmail": guardianEmail,
            "guardianAddress": guardianAddress,
            "fatherName": fatherName,
            "fatherPhone": fatherPhone,
            "registrationDate": registrationDate
        };
        axios(
            {
                method: 'POST',
                url: `http://localhost:5000/users/addUser`,
                headers: { 'Content-Type': 'application/json' },
                data: payload
            }
        ).then(response => this.props.history.push(`/`)).catch()
    }
    navigateToSignIn = (e) => {
        this.props.history.push(`/`)
    }
    enableStage2 = () => {
        this.setState({ stage1: false, stage2: true });
    }
    enableStage1 = () => {
        this.setState({ stage1: true, stage2: false });
    }
    handleChange = (e, context) => {
        const value = e.target.value;
        switch (context) {
            case 'name': this.setState({ name: value })
                break;
            case 'uid': this.setState({ uid: value })
                break;
            case 'email': this.setState({ email: value })
                break;
            case 'phone': this.setState({ phone: value })
                break;
            case 'address': this.setState({ address: value })
                break;
            case 'institution': this.setState({ institution: value })
                break;
            case 'password': this.setState({ password: value })
                break;
            case 'course': this.setState({ course: value })
                break;
            case 'guardianName': this.setState({ guardianName: value })
                break;
            case 'guardianPhone': this.setState({ guardianPhone: value })
                break;
            case 'guardianEmail': this.setState({ guardianEmail: value })
                break;
            case 'guardianAddress': this.setState({ guardianAddress: value })
                break;
            case 'fatherName': this.setState({ fatherName: value })
                break;
            case 'fatherPhone': this.setState({ fatherPhone: value })
                break;
            default:
                break;
        }
    }
    render() {
        const {
            stage1,
            stage2,
            name,
            uid,
            email,
            phone,
            address,
            institution,
            password,
            course,
            guardianName,
            guardianPhone,
            guardianEmail,
            guardianAddress,
            fatherName,
            fatherPhone } = this.state;
        return (
            <div className="login-form">
                <div className="upper">
                    <div className="login-div">
                        <div className="login">
                            <h1>{'Sign Up'}</h1>
                            {stage1 && <div>
                                <div className="input-text">
                                    <input type="text" id="inputPhone" name="phone" onChange={e => this.handleChange(e, 'phone')} value={phone} placeholder="Phone number" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid phone number.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputEmail" name="email" onChange={e => this.handleChange(e, 'email')} value={email} placeholder="Email" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid email.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputName" name="name" onChange={e => this.handleChange(e, 'name')} value={name} placeholder="Full Name" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid name.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputUID" name="uid" onChange={e => this.handleChange(e, 'uid')} value={uid} placeholder="UID - Aadhar Number" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid UID.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputAddress" name="address" onChange={e => this.handleChange(e, 'address')} value={address} placeholder="Parmanent Address" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid Address.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputCollege" name="institution" onChange={e => this.handleChange(e, 'institution')} value={institution} placeholder="College/Institution Name" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid College Name.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="password" id="inputPassword" value={password} onChange={e => this.handleChange(e, 'password')} name="password" placeholder="Password" />
                                    <div className="warning-input" id="warningPassword">
                                        {'Your password must contain between 4 and 60 characters.'}
                                    </div>
                                </div>
                                <div>
                                    <button className="signin-button" onClick={this.enableStage2}>{'Next'}</button>
                                </div>
                            </div>}
                            {stage2 && <div>
                                <div className="input-text">
                                    <input type="text" id="inputCourse" value={course} onChange={e => this.handleChange(e, 'course')} name="Course" placeholder="Pursuing Course" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid Name.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputguardianName" value={guardianName} onChange={e => this.handleChange(e, 'guardianName')} name="guardianName" placeholder="Guardian Name" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid Name.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputguardianPhone" value={guardianPhone} onChange={e => this.handleChange(e, 'guardianPhone')} name="guardianPhone" placeholder="Guardian Phone" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid email.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputguardianEmail" value={guardianEmail} onChange={e => this.handleChange(e, 'guardianEmail')} name="guardianEmail" placeholder="Guardian Email" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid name.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputguardianAddress" value={guardianAddress} onChange={e => this.handleChange(e, 'guardianAddress')} name="guardianAddress" placeholder="Guardian Address" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid UID.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputfatherName" value={fatherName} onChange={e => this.handleChange(e, 'fatherName')} name="fatherName" placeholder="Father's Name" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid Address.'}
                                    </div>
                                </div>
                                <div className="input-text">
                                    <input type="text" id="inputfatherAddress" value={fatherPhone} onChange={e => this.handleChange(e, 'fatherPhone')} name="fatherAddress" placeholder="Father's Phone" />
                                    <div className="warning-input" id="warningEmail">
                                        {'Please enter a valid College Name.'}
                                    </div>
                                </div>
                                <div>
                                    <button className="signin-button" onClick={this.handleSignUp}>{'Sign Up'}</button>
                                </div>
                                <div>
                                    <button className="signin-button" onClick={this.enableStage1}>{'Go Back'}</button>
                                </div>
                            </div>}
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

export default withRouter(Signup);