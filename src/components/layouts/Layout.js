import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../header/Header';

const Layout = (props)=>(
    <Aux>
        <div>
            <Header></Header>
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout;