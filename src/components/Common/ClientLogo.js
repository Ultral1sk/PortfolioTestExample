import React, { Component } from 'react'

import SingleClientLogo from './SingleClientLogo'

import creativeLogo from '../assets/logos/creative-market.jpg'
import designLogo from '../assets/logos/designmodo.jpg'
import envatoLogo from '../assets/logos/envato.jpg'
import themeforestLogo from '../assets/logos/themeforest.jpg'


const logos = [
    { logo : creativeLogo},
    { logo : designLogo},
    { logo : envatoLogo},
    { logo : themeforestLogo}
]

class ClientLogo extends Component {
    render() {
        return (
            <>
                <section className="py-5">
                  <div className="container">
                    <div className="row">
                        {logos.map((logo, index) => {
                           return  <SingleClientLogo {...logo} key={index} />
                        })}

                    </div>
                  </div>
                </section>
            </>             
        )
    }
}

export default ClientLogo
