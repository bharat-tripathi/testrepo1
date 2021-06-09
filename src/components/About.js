import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default function About(props) {
    const loginName = localStorage.getItem('myloginName');
    return(
        <>
            <Header name={loginName}/>
            <Banner pageHeader="Travel Explore Enjoy" pageSubHeader="Explore your travel instincts" currentPage="About Us"/>
            <div className="container">
                <div className="row">
                    <p className="text-center mt-3">
                        Pack your bags. We’re going on vacation!
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}