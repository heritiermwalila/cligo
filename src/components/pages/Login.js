import React from 'react';
import Aux from '../../hoc/Aux';
import SigninForm from '../includes/forms/signin/signin';
import Heading from '../includes/page-heading';
const login=(props)=>(
    <Aux>
        <Heading pageHeading="Sign in ">
            <p>Please use your email and password to login</p>
        </Heading>
        <SigninForm formAction="/login" formMethod="POST"></SigninForm>
    </Aux>
);

export default login