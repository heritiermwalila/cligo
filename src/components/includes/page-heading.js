import React from 'react';

const heading=(props)=>{
    return (
    <div>
        <h4>{props.pageHeading}</h4>
        {props.children}
    </div>
    )
}

export default heading