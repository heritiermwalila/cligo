import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';

import './Header.css';
const header=(props)=>(
    <Aux>
        <div className="top-header">
            <header className="header-container">
                <div className="logo">
                    <NavLink to="/"><img src={require("../../assets/Cligo-Logo-2.png")} alt="Cligo logo"/></NavLink>
                </div>
                <ul className="nav-container">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/how-it-works'>How it works</NavLink></li>
                    <li><NavLink to='/app-features'>App Features</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>Sign up</NavLink></li>
                </ul>
            </header>
        </div>
  
    </Aux>
        
    
);

export default header;