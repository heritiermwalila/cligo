import React from 'react';
import Aux from '../../hoc/Aux';
import './app-feature-app.css';

const appfeatureapp=()=>(
    <Aux>
        <h4 className="app-head">App features</h4>
        <p>These are the features of the Cligo app</p>
        <div className="features-container">
            <div className="app-f feat-1">
                <img src={require("../../assets/reminder.png")} alt="Reminder" />
                <span>Reminder about visit and prescription</span>
            </div>
            <div className="app-f feat-2">
                <img src={require("../../assets/schedule.png")} alt="Schedule" />
                <span>Monitor of doctor's schedule</span>
            </div>
            <div className="app-f feat-3">
                <img src={require("../../assets/change.png")} alt="Change and reserve" />
                <span>Change, reserve or reject doctor's prescription</span>
            </div>
            <div className="app-f feat-4">
                <img src={require("../../assets/access.png")} alt="Access to electronic document" />
                <span>Access to electronic medical documents</span>
            </div>
            <div className="app-f feat-5">
                <img src={require("../../assets/laboratory.png")} alt="Access lab result" />
                <span>Access to laboratory test results</span>
            </div>
            <div className="app-f feat-6">
                <img src={require("../../assets/x-ray.png")} alt="Access lab result" />
                <span>Upload x-ray image, test result, etc...</span>
            </div>
        </div>
    </Aux>
);


export default appfeatureapp