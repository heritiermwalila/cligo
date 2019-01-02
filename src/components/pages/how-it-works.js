import React from 'react';
import Aux from '../../hoc/Aux';
import Heading from '../includes/page-heading';
import '../../assets/css/how-it-works.css';
import StoreIcons from '../includes/store-icons';
const about=(props)=>(
    <Aux>
        <Heading pageHeading="How it works?">
        <p>This description need to be replaced with real content. please do not forget to replace this with your own content</p>
        </Heading>
        <div className="steps-container">
            <div className="steps step-1">
                <img src={require("../../assets/doctor.png")} alt="find a doctor" />
                <span>Need a doctor?</span>
            </div>
            <div className="steps step-2">
                <img src={require("../../assets/download-app.png")} alt="Download app" />
                <span>Download our App</span>
            </div>
            <div className="steps step-3">
                <img src={require("../../assets/appointment.png")} alt="Book an appointment" />
                <span>Book an Appointment</span>
            </div>
            <div className="steps step-4">
                <img src={require("../../assets/treatment.png")} alt="Treament" />
                <span>Immediate Treatment <br />without que</span>
            </div>
        </div>
        <StoreIcons />
    </Aux>
);

export default about