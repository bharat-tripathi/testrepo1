import React, { Link } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default function MyProfile() {

    const loginName = localStorage.getItem('myloginName');

    const addDestClick = () => {
        
    }

    return(
        <>
            <Header name={loginName}/>
            <Banner pageHeader="Travel Explore Enjoy" pageSubHeader="Explore your travel instincts" currentPage="My Profile"/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-lg-8 col-md-6">
                                        <h3 className="mb-0 text-truncated">Jai</h3>
                                        <p className="lead">Admin</p>
                                        <p>
                                            This is where you manage the contents of this website.
                                        </p>
                                        <p> 
                                            <span className="badge badge-info tags mr-2">Destination</span> 
                                            <span className="badge badge-info tags mr-2">Travel</span>
                                            <span className="badge badge-info tags">Access</span>
                                        </p>
                                    </div>
                                    <div className="col-12 col-lg-4 col-md-6 text-center">
                                        <img src="/Images/profile.jpg" alt="" className="mx-auto rounded-circle img-fluid"/>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <h3 className="mb-0">12</h3>
                                        <small>Destinations</small>
                                        <button className="btn btn-block btn-outline-success"><span className="fa fa-plus-circle"></span> Add Destination</button>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <h3 className="mb-0">245</h3>
                                        <small>Credits</small>
                                        <button className="btn btn-outline-info btn-block"><span className="fa fa-remove"></span> Remove Destination</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>  
        </>
    );
}