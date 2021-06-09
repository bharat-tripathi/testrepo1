import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import axios from 'axios';

export default class GridView extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         destinations: []
    //     }
    // }

    // componentDidMount() {
    //     // fetch(`https://jsonplaceholder.typicode.com/users`, {
    //     //     method: "GET",
    //     // })
    //     // .then((res)=>res.json())
    //     // .then((res)=>this.setState({users: res}))
    //     axios.get(`https://jsonplaceholder.typicode.com/users`) //API Url to get data
    //     .then((res) => {
    //         this.setState({
    //             destinations: res.data
    //         });
    //         console.log(res);
    //     });
    // }
    
    render() {
        var testColorStyle = {
            color: '#5ac0d7'
        }

        const loginName = localStorage.getItem('myloginName');

        return(
            <>
                <Header name={loginName}/>
                <Banner pageHeader="Travel Explore Enjoy" pageSubHeader="Explore your travel instincts" currentPage="Destinations"/>
                <div className="container mt-3">
                    {/* <h2 className="text-center mt-3">The Destinations</h2> */}
                    <div className="row">
                        {this.props.destinations.map((destination) => (
                            <div className="col-sm-6 col-md-4" key={(destination.id).toString()}>
                                <article className="mb-3 box">
                                    <figure style={{ backgroundImage: `url("${destination.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 160, width: 330 }}>
                                    </figure>
                                    <div className="details">
                                        <h4 className="box-title" style={testColorStyle}>{destination.name}</h4>
                                        <div className="feedback">
                                            <span className="review"><span style={testColorStyle}>{destination.reviewCount}</span> reviews</span>
                                        </div>
                                        <p className="description">{destination.desc}</p>
                                        <div className="action">
                                            <Link className="selectButton btn text-white" to="/details">View</Link>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

GridView.defaultProps = {
    destinations: [  
        {  
          'id': 1,   
          'name': 'Singapore',   
          'reviewCount': 4545,
          'image': '/Images/singapore.jpg',
          'desc': 'When you’re budgeting for your trip here, keep in mind that Singapore is one of the wealthiest countries in the world. While you can find some bargains in Malaysia and Indonesia, Singapore is expensive so expect to spend the same as you would in a big American or European city.'
        },  
        {  
          'id': 2,   
          'name': 'Germany',   
          'reviewCount': 3434,
          'image': '/Images/germany.jpg',
          'desc': 'From urban cities like Berlin to small villages in the Alps, Germany is a rich European destination filled with unforgettable travel experiences. Here are some of our favorite travel articles and travel blogs on Germany.'
        },
        {  
            'id': 3,   
            'name': 'Greenland',   
            'reviewCount': 4444,
            'image': '/Images/greenland.jpg',
            'desc': '80% of Greenland is covered in ice. Some of the year the ice and snow cover close to 100%. Obviously, the ice has a significant influence on the life on the world’s biggest island.'
        },
        {  
            'id': 4,   
            'name': 'Venice',   
            'reviewCount': 1212,
            'image': '/Images/venice.jpg',
            'desc': 'For a place so visibly tethered to its past, Venice is having a mini renaissance. Few places can lay claim to such a spectacular natural setting, untainted architectural heritage, or jaw-dropping main drag in the Grand Canal.'
        },
        {  
            'id': 5,   
            'name': 'Malaysia',   
            'reviewCount': 2345,
            'image': '/Images/malaysia.jpg',
            'desc': 'Malaysia is one of the wealthier nations in Southeast Asia, and includes 13 states and three federal territories. Malaysia is known for its unique cuisine, which is influenced by Chinese, Indian and even European cuisine.'
        },
        {  
            'id': 6,   
            'name': 'Iceland',   
            'reviewCount': 3122,
            'image': '/Images/iceland.jpg',
            'desc': 'Iceland exercises the imagination like no other destination. Waterfalls seem to pour over every cliff edge and mountain face, mud pots pop, volcanoes smoke and fume, and a bitter Arctic wind howls across the otherworldly lava fields and fjords.'
        }
    ]
}

GridView.propTypes = {
    products: PropTypes.object,
    products: PropTypes.array,
}
// GridView.propTypes = {
//     products.map((product) => {
//         product.id: PropTypes.string.isRequired
//     }),
//     email: PropTypes.string.isRequired,
// }