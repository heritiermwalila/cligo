import React from 'react';
import Aux from '../../hoc/Aux';
import Heading from '../includes/page-heading';
import StoreIcons from '../includes/store-icons';
const community=(props)=>(
    <Aux>
        <Heading pageHeading="Cligo health care app">
        <p>Introduces a new way to manage your health to improve accessibility and quality of health care to the masses. 
            All you have to do is to download the app on your phone and get the doctor help online</p>
        </Heading>
        <StoreIcons />
    </Aux>
);

export default community