import React from 'react';
import Aux from '../../../../hoc/Aux';
import './signup.css';
import StoreIcons from '../../store-icons';


const signupForm = (props)=>(
    <Aux>
        <form action={props.formAction} method={props.formMethod}  className="sign-up-form">
            <input type="text" placeholder="firstname"/>
            <input type="text" placeholder="lastname"/>
            <input type="text" placeholder="date of birth"/>
            <input type="text" placeholder="marital status"/>
            <input type="text" placeholder="residential address"/>
            <input type="phone" placeholder="cellphone number"/>
            <input type="email" placeholder="email address"/>
            <input type="password" placeholder="account password"/>
            <button type="submit" className="btn">Register Account</button>
        </form>
        <StoreIcons />
    </Aux>
);

export default signupForm