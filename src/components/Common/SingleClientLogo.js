import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const logos = [
    { creativeLogo : ''}
    
]

class SingleClientLogo extends Component {
    render() {
        return (
            <>
              
                <div className="col-md-3 col-sm-6">
                    <Link to="#">
                        <img className="img-fluid d-block mx-auto" src={this.props.logo} alt="" />
                    </Link>
                </div>
                   
                 
            </>
        )
    }
}

export default SingleClientLogo
