import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

function AddDestination() {
    
    const loginName = localStorage.getItem('myloginName');
    return(
        <>
            <Header name={loginName}/>
            <Banner pageHeader="Travel Explore Enjoy" pageSubHeader="Explore your travel instincts" currentPage="Add a new destination"/>
            <div className="container mt-3">
                <div className="row">
                    <form className="box w-100">
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Destination Name</label>
                                <input type="text" className="form-control" id="destinationName" placeholder="Destination name"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label>Number of reviews</label>
                                <input type="text" className="form-control" id="reviewNumbers" placeholder="No of Reviews"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label>Review</label>
                                <input type="text" className="form-control" id="review" placeholder="Give a Review"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" id="description" placeholder="Description"></textarea>
                        </div>
                        
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default AddDestination;