import React, { useState } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default function HomeScreen(props) {
    var textColorStyle = {
        color: '#5ac0d7'
    }

    const loginName = localStorage.getItem('myloginName');
    
    return(
        <>
            <Header name={props.name || loginName}/>
            <Banner pageHeader="Travel Explore Enjoy" pageSubHeader="Explore your travel instincts"/>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-5">
                        <h3 style={textColorStyle}>Glance</h3>
                        <p>If I had my way I would insist that they rename this magnificent road something descriptive like  “Iceland’s road to natural phenomena”. The sat nav, refers to it simply as One.
        Tourists though may know this well-maintained two-lane road as the Iceland Ring Road.</p>
                    </div>
                    <div className="col-md-7">
                        <div id="fs-1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="\Images\photo8.jpeg" className="d-block w-100" alt="photo1" style={{height: 420}}/>
                                </div>
                                <div className="carousel-item">
                                    <img src="\Images\photo12.jpeg" className="d-block w-100" alt="photo2" style={{height: 420}}/>
                                </div>
                                <div className="carousel-item">
                                    <img src="\Images\photo13.jpeg" className="d-block w-100" alt="photo3" style={{height: 420}}/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#fs-1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#fs-1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-7">
                        <div id="fs-2" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="\Images\photo5.jpg" className="d-block w-100" alt="photo5" style={{height: 420}}/>
                                </div>
                                <div className="carousel-item">
                                    <img src="\Images\photo11.jpeg" className="d-block w-100" alt="photo6" style={{height: 420}}/>
                                </div>
                                <div className="carousel-item">
                                    <img src="\Images\photo7.jpeg" className="d-block w-100" alt="photo7" style={{height: 420}}/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#fs-2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#fs-2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h3 style={textColorStyle}>Glance</h3>
                        <p>If I had my way I would insist that they rename this magnificent road something descriptive like  “Iceland’s road to natural phenomena”. The sat nav, refers to it simply as One.
        Tourists though may know this well-maintained two-lane road as the Iceland Ring Road.</p>
                    </div>
                </div>
                
            </div>
        <Footer/>
        </>
    );
}