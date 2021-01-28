import React from 'react';
import './Header.css';
import GoogleAuth from './GoogleAuth';
import logo from '../images/WhiteP0W.png';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">

            <Link to="/">
            <div className="header-logo">
            <img src={logo} alt="" className="header-image"/>
            </div>
            </Link>

            <div className="header-right">
            <GoogleAuth/>
            </div>
            
        </div>
    )
}

export default Header
