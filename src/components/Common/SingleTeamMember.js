import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const teamMembersInformation = [
    {name: '',  avatars : '', profession : '',   iconOne : 'fa-twitter', iconTwo : 'fa-facebook-f', iconThree : 'fa-linkedin-in'},
]

class SingleTeamMembers extends Component {
    render() {
        return (
          
            <div className="col-sm-4">
            <div className="team-member">
                <img className="mx-auto rounded-circle" src={this.props.avatars} alt="" />
                <h4>{this.props.name}</h4>
                <p className="text-muted">{this.props.profession}</p>
                <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                    <Link to="#">
                    <i className={`fab ${this.props.iconOne}`}></i>
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#">
                    <i className={`fab ${this.props.iconTwo}`}></i>
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#">
                    <i className={`fab ${this.props.iconThree}`}></i>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
                  
             

        
        )
    }
}

export default SingleTeamMembers
