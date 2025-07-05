import React from 'react';
import AboutIntro from '../AboutIntro/AboutIntro';
import ModernService from '../ModernService/ModernService';
import HowAppointment from '../HowAppointment/HowAppointment';
import WhyUs from '../WhyUs/WhyUs';
import Histroy from '../Histroy/Histroy';

const About = () => {
    return (
        <div>
            <AboutIntro/>
            <ModernService/>
            <HowAppointment/>
            <WhyUs/>
            <Histroy/>
        </div>
    );
};

export default About;