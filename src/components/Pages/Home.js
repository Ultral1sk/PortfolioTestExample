import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio'
import Team from '../Common/Team';
import ClientLogo from '../Common/ClientLogo'


class Home extends Component {
    render() {
        return (
            <div>
                <Header 
                  title="Welcome to My Portfolio"
                    subtitle="FullStack Web Developer"
                    buttonText="Contact Me"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
                <Team />
                <ClientLogo />
            </div>
        )
    }
}

export default Home
