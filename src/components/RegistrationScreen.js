import React, {useState} from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

const RegistrationScreen = (props) => {
    
    const [formData, setFormData] = useState({
        eMail: '',
        username: '',
        firstName: '',
        lastName: '',
        pHone: '',
        passWord: ''
    });

    // const [flag, setFlag] = useState(false);
    const history = useHistory();
    const handleChange = (event) => {
        const emailRegex = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const phoneRegex = /^\d{10}$/g;
        let controlName = event.target.name;
        let controlValue = event.target.value;
        let emailErr, fNameErr, lNameErr, phoneErr, passErr, userErr = false;

        if (controlName === 'eMail') {
            if (controlValue === '' || controlValue === null) {
                emailErr= true;
            } else {
                const res = emailRegex.test(controlValue);
                if (res) {
                    emailErr= false;
                } else {
                    emailErr= true;
                }
            }
        }

        if (controlName === 'username') {
            if (controlValue === '') {
                userErr = true
            }
        }

        if (controlName === 'firstName') {
            if (controlValue === '' || controlValue === null) {
                fNameErr = true;
            } else {
                fNameErr = false;
            }
        }

        if (controlName === 'lastName') {
            if (controlValue === '' || controlValue === null) {
                lNameErr = true;
            } else {
                lNameErr = false;
            }
        }

        if (controlName === 'pHone') {
            if (controlValue === '') {
                phoneErr = true;
            } else {
                const res = phoneRegex.test(controlValue);
                if (res) {
                    phoneErr = false;
                } else {
                    phoneErr = true;
                }
                
            }
        }

        if (controlName === 'passWord') {
            if (controlValue === '') {
                passErr = true;
            } else {
                passErr = false;
            }
        }

        // if (controlName === 'confirmPassword') {
        //     if (controlValue === formData.passWord) {
        //         cnfPassErr = false;
        //     } else {
        //         cnfPassErr = true;
        //     }
        // }



        setFormData({
            ...formData,
            [controlName]: controlValue,
            emailErr: emailErr,
            fNameErr: fNameErr,
            lNameErr: lNameErr,
            phoneErr: phoneErr,
            passErr: passErr
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

        const user = {
            firstname: formData.firstName,
            lastname: formData.lastName,
            email: formData.eMail,
            username: formData.username,
            phone: formData.pHone,
            password: formData.passWord
        }

        axios.post(`http://localhost:3000/api/v1/users/register`, user)
        .then((res) => {
            if (res.status === 201) {
                localStorage.setItem('myloginName', formData.firstName);
                history.push({
                    pathname: '/home',
                });
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <>
            <div id="register">
                <div className="container">
                    <div id="register-row" className="row justify-content-center align-items-center">
                        <div id="register-column" className="col-md-6">
                            <div id="register-box" className="col-md-12 h-auto mt-60">
                                <form id="register-form" className="form" onSubmit={handleSubmit.bind(this)}>
                                    <h3 className="text-center text-info">Create Account</h3>
                                    <div className="form-group">
                                        <label className="text-info">Email:</label><br/>
                                        <input type="text" name="eMail" id="emailId" className="form-control"  data-value={formData.eMail} value={formData.eMail} onChange={handleChange.bind(this)}/>
                                        {formData.emailErr ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-info">Username:</label><br/>
                                        <input type="text" name="username" id="username" className="form-control"  data-value={formData.username} value={formData.username} onChange={handleChange.bind(this)}/>
                                        {formData.userErr ? <span style={{color: "red"}}>Please Enter username</span> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-info">First Name:</label><br/>
                                        <input type="text" name="firstName" id="firstName" className="form-control" value={formData.firstName} onChange={handleChange.bind(this)}/>
                                        {formData.fNameErr ? <span style={{color: "red"}}>Please Enter first name</span> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-info">Last Name:</label><br/>
                                        <input type="text" name="lastName" id="lastName" className="form-control" value={formData.lastName} onChange={handleChange.bind(this)}/>
                                        {formData.lNameErr ? <span style={{color: "red"}}>Please Enter last name</span> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-info">Phone:</label><br/>
                                        <input type="text" name="pHone" id="phone" className="form-control" value={formData.pHone} onChange={handleChange.bind(this)}/>
                                        {formData.phoneErr ? <span style={{color: "red"}}>Please Enter a valid phone number.</span> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-info">Password:</label><br/>
                                        <input type="password" name="passWord" id="password" value={formData.passWord} className="form-control" onChange={handleChange.bind(this)}/>
                                        {formData.passErr ? <span style={{color: "red"}}>Please Enter a passowrd.</span> : ''}
                                        {/* <label className="text-info">Confirm Password:</label><br/>
                                        <input type="text" name="confirmPassword" id="confirmPassword" className="form-control"/> */}
                                    </div>
                                    {/* {formData.errorMessage} */}
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                        <Link to="/login" className="text-info float-right">Back to login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegistrationScreen;
