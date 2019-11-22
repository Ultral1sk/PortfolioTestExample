import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik'
import  * as Yup from 'yup'

const fields = {
  sections : [
    [
      {name: 'name', elementName: 'input', type: 'text', placeholder: 'Type your name'},
      {name: 'email', elementName: 'input', email: 'text', placeholder: 'Type your email'},
      {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Type your phone'},


    ], 
    [
      {name: 'message', elementName: 'textarea', type: 'text', placeholder: ''}

    ]
  ]
}

class Contact extends Component {

  render() {
    return (
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
            <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate" >
              <div className="row">
              {fields.sections.map((section, sectionIndex) => {
                console.log(section)
                return (
                    <div className="col-md-6">
                    {section.map((field, i) => {

                      return <Field 
                                    {...field} 
                            key     ={sectionIndex} 
                            value   ={this.props.values[field.name]}
                            name    ={field.name}
                            onChange={this.props.handleChange}
                            onBlur  ={this.props.handleBlur}
                            touched ={(this.props.touched[field.name])}
                            errors  ={this.props.errors[field.name]}
                            />

                          })}
                     
                    </div>
                        )
                      })}

                
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button 
                   
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
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name    : '',
    email   : '',
    phone   : '',
    message : ''

  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3,'The length of the name is not long enough').required('The length of the name is not long enough'),
    email: Yup.string().email('The field requries valid email').required('The field requries valid email'),
    phone: Yup.string()
              .min(10, 'Pease provide your 10 digit phone number')
              .max(15, 'Number is not long enough')
              .required('This filed requires a valid phone number'),

    message: Yup.string().min(500, 'You need to provide us more detailed information')
  }),

  handleSubmit: ((values, {setSubmitting}) => {
    alert("You've submitted the form", JSON.stringify(values));
  })

})(Contact);
