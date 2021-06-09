import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default function RemoveDestination(props) {

    var testColorStyle = {
        color: '#5ac0d7'
    }

    const loginName = localStorage.getItem('myloginName');

    return(
        <>
            <Header name={loginName}/>
            <Banner pageHeader="Travel Explore Enjoy" pageSubHeader="Explore your travel instincts" currentPage="Remove a destination"/>
            <div className="container mt-3">
                <div className="row m-0">
                {props.products.map((product) => (
                    <div className="input-group mb-3 p-1 box" key={(product.id).toString()} style={{flexFlow: 'nowrap'}}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{backgroundColor: '#f2e4ca'}}>
                                <input type="radio" name="removeRadio" aria-label="Checkbox for following text input"/>
                            </div>
                        </div>
                        <img className="d-none d-md-block" src={product.image} width={120}></img>
                        {/* <figure style={{ backgroundImage: `url("${product.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 160, width: 100, marginBottom: 0 }}></figure> */}
                        <div className="ml-3">
                            <p className="font12">
                                <h4 className="box-title" style={testColorStyle}>{product.name}</h4>
                                {product.desc}
                            </p>
                            <a className="removeDest cursor" style={testColorStyle}>Remove</a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

RemoveDestination.defaultProps = {
    products: [  
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