import React from 'react';
import Aux from '../../../../hoc/Aux';
import './signin.css';
import StoreIcons from '../../store-icons';


const signinForm = (props)=>(
    <Aux>
        <form action={props.formAction} method={props.formMethod}  className="sign-in-form">
            <input type="email" placeholder="enter your email"/>
            <input type="password" placeholder="enter your password"/>
            <button type="submit" className="btn">Sign in</button>
        </form>
        <StoreIcons />
    </Aux>
);

export default signinForm