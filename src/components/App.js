import React from 'react';
import DetailsView from './DetailsView';
// import Footer from './Footer';
import GridView from './GridView';
// import Header from './Header';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import RegistrationScreen from './RegistrationScreen';
import NotFound from './NotFound';
import About from './About';
import AddDestination from './AddDestination';
import RemoveDestination from './RemoveDestination';
import MyProfile from './MyProfile';

export default function App() {
  return(
    <>
      <Router>
          <Switch>
              <Route exact path="/home" component={HomeScreen}/>
              <Route exact path="/" component={LoginScreen}/>
              <Route exact path="/login" component={LoginScreen}/>
              <Route exact path="/destinations" component={GridView}/>
              <Route exact path="/details" component={DetailsView}/>
              <Route exact path="/register" component={RegistrationScreen}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/adddestination" component={AddDestination}/>
              <Route exact path="/removedestination" component={RemoveDestination}/>
              <Route exact path="/myprofile" component={MyProfile}/>
              <Route component={NotFound}/>
          </Switch>
      </Router>
      {/* <Header name="Jai"/> */}
      {/* <LoginScreen/> */}
      {/* <div className="container">
          <HomeScreen/>
          
      </div> */}
      {/* <GridView/> */}
      {/* <DetailsView/> */}
      {/* <Footer/> */}
    </>
  );
}