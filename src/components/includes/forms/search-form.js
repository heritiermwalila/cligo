import React from 'react';
import Aux from '../../../hoc/Aux';
import './search-form.css'

const form = (props)=>(
    <Aux>
        <form action={props.action} method={props.formMethod}>
            <input type="text" placeholder="search your nearest clinic..." id="search"/>
            <button type="submit">Search now</button>
        </form>
    </Aux>
);

export default form