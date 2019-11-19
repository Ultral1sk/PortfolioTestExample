import React, { Component } from 'react'
import SingleTeamMembers from './SingleTeamMember';
import { Link } from 'react-router-dom';

import img1 from '../assets/team/1.jpg'
import img2 from '../assets/team/2.jpg'
import img3 from '../assets/team/3.jpg'


const teamMembersInformation = [
    {name: 'Jovan Derebanoski',  avatars : img1, profession : 'Full-Stack Web Developer',   iconOne : 'fa-twitter', iconTwo : 'fa-facebook-f', iconThree : 'fa-linkedin-in'},
    {name: 'Hristijan Talevski', avatars : img2, profession : 'UI/UX Designer',             iconOne : 'fa-twitter', iconTwo : 'fa-facebook-f', iconThree : 'fa-linkedin-in'},
    {name: 'Bojan Angeleski',    avatars : img3, profession : 'Full Stack Web Developer',   iconOne : 'fa-twitter', iconTwo : 'fa-facebook-f', iconThree : 'fa-linkedin-in'},

];

class Team extends Component {
    render() {
        return (
           
            
              <section className="bg-light page-section" id="team">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
             
               
                    {teamMembersInformation.map((member, index) => {
                      return  <SingleTeamMembers {...member} key={index} />
                    })}
                  
              </div>
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
              </div>
            </div>
          </section>
                
        
        )
    }
}

export default Team
