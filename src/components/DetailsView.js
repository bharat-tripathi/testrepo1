import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default function DetailsView() {
    var textColorStyle = {
        color: '#5ac0d7'
    }
    const loginName = localStorage.getItem('myloginName');
    return(
        <>
            <Header name={loginName}/>
            <Banner pageHeader="Travel Explore Enjoy" pageSubHeader="Explore your travel instincts"/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-9 col-sm-6">
                        <div id="fs-3" className="carousel slide" data-ride="carousel">
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
                            <a className="carousel-control-prev" href="#fs-3" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#fs-3" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <article className="detailed-logo">
                            <figure className="text-center p-3 box">
                                <img src="\Images\singapore.jpg" alt="" width={150}/>
                            </figure>
                            <div className="details">
                                <h2 className="box-title" style={textColorStyle}>Singapore</h2>
                                <span className="price clearfix">
                                    <small className="pull-left">avg/night</small>
                                    <span className="pull-right">$620</span>
                                </span>
                                <div className="feedback clearfix">
                                    <span className="review pull-right">270 reviews</span>
                                </div>
                                <p className="description">Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pulvinar massa idend porta nequetiam elerisque mi id, consectetur adipi deese cing elit maus fringilla bibe endum.</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="mt-3 mb-3">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-link active" id="nav-description-tab" data-toggle="tab" href="#nav-description" role="tab" aria-controls="nav-description" aria-selected="true">Description</a>
                            <a className="nav-link" id="nav-hotels-tab" data-toggle="tab" href="#nav-hotels" role="tab" aria-controls="nav-hotels" aria-selected="false">Hotels & Resorts</a>
                            <a className="nav-link" id="nav-amenities-tab" data-toggle="tab" href="#nav-amenities" role="tab" aria-controls="nav-amenities" aria-selected="false">Amenities</a>
                            <a className="nav-link" id="nav-reviews-tab" data-toggle="tab" href="#nav-reviews" role="tab" aria-controls="nav-reviews" aria-selected="false">Reviews</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                            <p>
                                Sed aliquam nunc eget velit imperdiet, in rutrum mauris malesuada. 
                                Quisque ullamcorper vulputate nisi, et fringilla ante convallis quis. Nullam vel tellus non elit suscipit volutpat. 
                                Integer id felis et nibh rutrum dignissim ut non risus. In tincidunt urna quis sem luctus, sed accumsan magna pellentesque. 
                                Donec et iaculis tellus. Vestibulum ut iaculis justo, auctor sodales lectus. Donec et tellus tempus, dignissim maurornare, consequat lacus. 
                                Integer dui neque, scelerisque nec sollicitudin sit amet, sodales a erat. Duis vitae condimentum ligula. Integer eu mi nisl. 
                                Donec massa dui, commodo id arcu quis, venenatis scelerisque velit.
                                Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. 
                                Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. 
                                Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                Donec nec velit non odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim. Fusce pretium egestas cursus.
                                Etiam consectetur, orci vel rutrum volutpat, odio odio pretium nisiodo tellus libero et urna.
                            </p>
                            <p>
                                Sed commodo ipsum ligula, id volutpat risus vehicula in. Pellentesque non massa eu nibh posuere bibendum non sed enim. Maecenas lobortis nulla sem, vel egestas dui ullamcorper ac.
                                Sed scelerisque lectus sit amet faucibus sodales. Proin ut risus tortor. Etiam fermentum tellus auctor, fringilla sapien et, congue quam. 
                                In a luctus tortor. Suspendisse eget tempor libero, ut sollicitudin ligula. Nulla vulputate tincidunt est non congue. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus at est imperdiet, dapibus ipsum vel, lacinia nulla. 
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus id interdum lectus, ut elementum elit. Nullam a molestie magna. 
                                Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. 
                                Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra.
                            </p> 
                        </div>
                        <div className="tab-pane fade" id="nav-hotels" role="tabpanel" aria-labelledby="nav-hotels-tab">
                            <ul className="list-group mt-2">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <img src="/Images/photo11.jpeg" width={150} height={100}></img>
                                    </div>
                                    <button className="btn ">Select</button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img src="/Images/photo11.jpeg" width={150} height={100}></img>
                                    <span className="badge badge-primary badge-pill">Select</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img src="/Images/photo11.jpeg" width={150} height={100}></img>
                                    <span className="badge badge-primary badge-pill">Select</span>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="nav-amenities" role="tabpanel" aria-labelledby="nav-amenities-tab">
                            Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pulvinar massa idend porta nequetiam elerisque mi id, consectetur adipi deese cing elit maus fringilla bibe endum.
                        </div>
                        <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
                            Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pulvinar massa idend porta nequetiam elerisque mi id, consectetur adipi deese cing elit maus fringilla bibe endum.
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}