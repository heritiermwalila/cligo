import React from 'react';
import Aux from '../../hoc/Aux';
import {NavLink} from 'react-router-dom';
import Form from '../includes/forms/search-form';
import './page.css';
const home=(props)=>(
    <Aux>
        <div className="page-container">
            <div className="content-container">
                <div className="left-content">
                    <h4>Introducing the cligo health care new App for patients and doctors</h4>
                    <div className="search-form-container">
                        <span>Looking for the nearest clinic?</span>
                        <Form action="/search-clinic" formMethod="POST"/>
                        <h5>Cligo is available on:</h5>
                        <div className="store-icons">
                            <div className="google">
                                <NavLink to="/"><img src={require("../../assets/google-play.png")} alt="Google play store"/></NavLink>
                            </div>
                            <div className="apple">
                                <NavLink to="/"><img src={require("../../assets/apple-store.png")} alt="Apple play store"/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <img src={require("../../assets/iphonex.png")} alt="Download app"/>
                </div>
            </div>
            
        </div>
        <div className="home-see-more">
            <div className="see-more">
                <h2>Your health on the go</h2>
                <NavLink to="/about-us" className="btn">See more</NavLink>
            </div>
        </div>
    </Aux>
);

export default home