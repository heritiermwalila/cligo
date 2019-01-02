import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Header from '../header/Header';
import {Route} from 'react-router-dom';
import Home from '../pages/Home';
import HowItWorks from '../pages/how-it-works';
import AppFeatures from '../pages/app-features';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import HomeApp from '../includes/home-app';
import HowItWorksApp from '../includes/how-it-works-app';
import AppFeatureApp from '../includes/app-feature-app';
class Layout extends Component{

    render(){
        
        return (
            <Aux>
                <div>
                    <Header></Header>
                </div>
                <main>
                <div className="page-container">
                    <div className="content-container">
                        <div className="left-content">
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/how-it-works" exact component={HowItWorks}></Route>
                        <Route path="/app-features" exact component={AppFeatures}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/signup" exact component={Signup}></Route>
                        </div>
                        <div className="right-content">
                        {/* render image base on their path */}
                        <Route path="/" exact component={HomeApp}></Route>
                        <Route path="/how-it-works" exact component={HowItWorksApp}></Route>
                        <Route path="/app-features" exact component={AppFeatureApp}></Route>
                        <Route path="/login" exact component={HomeApp}></Route>
                        <Route path="/signup" exact component={HomeApp}></Route>
                            
                        </div>
                    </div>
                    
                </div>
                </main>
            </Aux>
        )
    }

}

export default Layout;