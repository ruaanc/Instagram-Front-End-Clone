import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/logo1.svg';

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/"><img src={logo} width="200px" height="200px" alt="InstaRocket" /></Link>
                <Link to="/new"><img src="https://img.icons8.com/material-outlined/60/000000/camera.png" alt=""></img></Link>
                
            </div>
        </header>
    );
}
