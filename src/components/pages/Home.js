import React from 'react';
import Aux from '../../hoc/Aux';
import {NavLink} from 'react-router-dom';
import Form from '../includes/forms/search-form';
import Heading from '../includes/page-heading';
import './page.css';
import StoreIcons from '../includes/store-icons';
const home=(props)=>(
    <Aux>
    <Heading pageHeading="Introducing the Cligo health care new app for patients and doctors" />
        <div className="search-form-container">
            <span>Looking for the nearest clinic?</span>
            <Form action="/search-clinic" formMethod="POST"/>
            <h5>Cligo is available on:</h5>
            <StoreIcons />
        </div>
    <div className="home-see-more">
        <div className="see-more">
            <h2>Your health on the go</h2>
            <NavLink to="/about-us" className="btn">See more</NavLink>
        </div>
    </div>
</Aux>
)


export default home