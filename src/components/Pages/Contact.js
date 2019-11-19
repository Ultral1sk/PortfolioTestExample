import React, { Component } from 'react'


class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name    : '', 
            email   : '',
            phone   : '',
            message : ''
        }
        this.formControler = this.formControler.bind(this);
        this.submitForm = this.submitForm.bind(this);
}

    formControler(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    
    submitForm(e){
      
        alert('Form submitted. Thank you');
    }


    render() {
        return (
            <div>
              <section className="page-section" id="contact">
                <div className="container">
                 <div className="row">
                    <div className="col-lg-12 text-center">
                      <h2 className="section-heading text-uppercase">Contact Us</h2>
                      <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                 </div>
                <div className="row">
                    <div className="col-lg-12">
                      <form  name="sentMessage" novalidate="novalidate" onSubmit={this.submitForm}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input 
                                className="form-control" 
                                id="name" 
                                name="name"
                                type="text" 
                                placeholder="Your Name *" 
                                required="required" 
                                data-validation-required-message="Please enter your name." 
                                value={this.state.name}
                                onChange={this.formControler}
                                />
                              <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                              <input 
                                className="form-control" 
                                id="email" 
                                name="email"
                                type="email" 
                                placeholder="Your Email *" 
                                required="required"
                                data-validation-required-message="Please enter your email address." 
                                value={this.state.email}
                                onChange={this.formControler}
                                />
                              <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                              <input 
                                className="form-control"
                                id="phone"
                                name="phone"
                                type="number"
                                placeholder="Your Phone *"
                                required="required"
                                data-validation-required-message="Please enter your phone number."
                                value={this.state.phone}
                                onChange={this.formControler}
                                />
                              <p className="help-block text-danger"></p>
                            </div>
                          </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea 
                                  className="form-control"
                                  id="message" 
                                  name="message"
                                  placeholder="Your Message *"
                                  required="required"
                                  data-validation-required-message="Please enter a message."
                                  value={this.state.message}
                                  onChange={this.formControler}
                                  >
                                </textarea>
                              <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                          <div className="col-lg-12 text-center">
                            <div id="success"></div>
                                <button 
                                    id="sendMessageButton"
                                    className="btn btn-primary btn-xl text-uppercase"
                                    type="submit"
                                    
                                >
                                    Send Message
                                </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            </section>      
            </div>
        );
    }
}

export default Contact
