import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            flag: false,
            errorMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);    
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChange(event) {
        let controlName = event.target.name;
        let controlValue = event.target.value;
        let errorMsg = ''
        let errtxtcolor = {
            color: 'red'
        }

        if (controlName === 'userName') {
            if(controlValue === '') {
                errorMsg = <p className="font12" style={errtxtcolor}>Username field is blank !</p>;
            } else if (controlValue.length < 7) {
                errorMsg = <p className="font12" style={errtxtcolor}>Username too small !</p>;
            } 
        }

        if (controlName === 'passWord') {
            if (controlValue === '') {
                errorMsg = <p className="font12" style={errtxtcolor}>Password field is blank !</p>;
            }
        }

        this.setState({
            [controlName]: controlValue,
            errorMessage: errorMsg
        });
        
    }

    // handleSubmit(event) {
    //     let uName = this.state.userName;
    //     let pWord = this.state.passWord;
    //     if (uName && pWord) {
    //         // API Call for cross checking credentials in DB.
    //         this.setState({flag: true});
    //         localStorage.setItem('myloginName', uName);
    //         this.props.history.push({
    //             pathname: '/home',
    //         });
    //     } else {
    //         this.props.history.push('/login');
    //     }
        
    //     event.preventDefault();
    // }
    handleSubmit(event) {
        event.preventDefault();

        const user = {
            username: this.state.userName,
            password: this.state.passWord
        };
        let errtxtcolor = {
            color: 'red'
        }
        
        axios.post(`http://localhost:3000/api/v1/users/login`, user)
        .then((res) => {
            if (res.status === 200) {
                localStorage.setItem('myloginName', this.state.userName);
                this.props.history.push({
                    pathname: '/home',
                });
            } else {
                this.state.errorMessage = <p className="font12" style={errtxtcolor}>{res.message}</p>;
            }
        })
        .catch((res) => {
            console.log(res);
            this.state.errorMessage = <p className="font12" style={errtxtcolor}>{res.message}</p>;
        })
    }
    
    render() {
        return(
            <>
                <div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label className="text-info">Username:</label><br/>
                                            <input type="text" name="userName" id="username" className="form-control" value={this.state.userName} onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="text-info">Password:</label><br/>
                                            <input type="password" name="passWord" id="password" className="form-control" value={this.state.passWord}  onChange={this.handleChange}/>
                                        </div>
                                        {this.state.errorMessage}
                                        <div className="form-group d-flex justify-content-between">
                                            <Link to="/home" className="text-info">Skip for now</Link>
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                            <Link to="/register" className="text-info">Register here</Link>
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
}