import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import Services from '../Common/Services';



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
            </div>
        )
    }
}

export default Home
