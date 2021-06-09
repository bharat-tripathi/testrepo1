import React from 'react';
import { Link } from 'react-router-dom';
 
export default function Footer() {
    var textColorStyle = {
        color: '#5ac0d7'
    }
    return(
        <>
            <footer className="bg-light mt-3">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="logoTravel.jpg" alt="" width="100" className="mb-3"/>
                            <p className="font-italic text-muted">Explore your travel instincts.</p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter" style={textColorStyle}></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook" style={textColorStyle}></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram" style={textColorStyle}></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest" style={textColorStyle}></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo" style={textColorStyle}></i></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Home</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link to="/destinations" className="text-muted">Destinations</Link></li>
                                <li className="mb-2"><Link to="/about" className="text-muted">About</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Get On</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link to="/login" className="text-muted">Login</Link></li>
                                <li className="mb-2"><Link to="/register" className="text-muted">Register</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Subscribe</h6>
                            <p className="text-muted mb-4">Want to explore more, hit us with your email address.</p>
                            <div className="p-1 rounded border">
                                <div className="input-group">
                                    <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane" style={textColorStyle}></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}