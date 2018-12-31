import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';
import Home from '../pages/Home';
import HowItWorks from '../pages/how-it-works';
import Community from '../pages/Community';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
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
                    <li><NavLink to='/community'>Community</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>Sign up</NavLink></li>
                </ul>
            </header>
        </div>
        

        <Route path="/" exact component={Home}></Route>
        <Route path="/how-it-works" exact component={HowItWorks}></Route>
        <Route path="/community" exact component={Community}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
    </Aux>
        
    
);

export default header;