import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';
import './store-icons.css';
const storeicons =(props)=>(
    <Aux>
        <div className="store-icons">
            <div className="google">
                <NavLink to="/"><img src={require("../../assets/google-play.png")} alt="Google play store"/></NavLink>
            </div>
            <div className="apple">
                <NavLink to="/"><img src={require("../../assets/apple-store.png")} alt="Apple play store"/></NavLink>
            </div>
        </div>
    </Aux>
)

export default storeicons