import React, { Component } from 'react';
import Header from '../Common/Header';
import Team from '../Common/Team';
import ClientLogo from '../Common/ClientLogo';
import image from '../assets/img/Aboutus.jpg';

class About extends Component {
    render() {
        return (
            <>
               <Header 
                  title="About us"
                    subtitle="It's really a great story"
                    showButton={false}
                    image={image}
                />
                    <Team />
                    <ClientLogo />
              </>
        );
    }
}

export default About
