import React from 'react';
import Aux from '../../hoc/Aux';
import SignupForm from '../includes/forms/signup/signup';
import Heading from '../includes/page-heading';
const login=(props)=>(
    <Aux>
        <Heading pageHeading="Register Account ">
            <p>Please fill up the form to register your account</p>
        </Heading>
        <SignupForm formAction="/signup" formMethod="POST"></SignupForm>
    </Aux>
);

export default login