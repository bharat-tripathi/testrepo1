import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
    
    const clearLogin = () => {
        localStorage.setItem('myloginName', '');
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-def">
                <Link className="navbar-brand" to="/home">
                    <img src="/logoTravel.jpg" className="d-inline-block align-top" alt="" style={{width: 70}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavMenu" aria-controls="navbarNavMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavMenu">
                    <ul className="navbar-nav">
                        {props.name ? <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Hi, {props.name}
                            </a>
                            <div className="dropdown-menu bg-def" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/myprofile">My Profile</Link>
                                <a className="dropdown-item" href="#" onClick={clearLogin}>Logout</a>
                            </div>
                        </li> : <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>}
                    </ul>
                    <ul className="navbar-nav" style={{justifyContent: 'flex-end', flex: 'auto'}}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/destinations">Destinations</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

// Header.defaultProps = {
//     name: "Jai"
// }