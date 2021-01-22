import React from 'react';
import './Header.css';
import GoogleAuth from './GoogleAuth';
function Header() {
    return (
        <div className="header">
            <div className="header-logo">
            <h1>P0W</h1>
            </div>
            <div className="header-right">
            <h4>All Streams</h4>
            <GoogleAuth/>
            </div>
            
        </div>
    )
}

export default Header
