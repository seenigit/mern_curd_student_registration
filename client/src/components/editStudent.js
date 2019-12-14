import React from 'react';
import FormFieldGroup from './formFieldGroup';
import FormSelect from './formSelect';
import FormButton from './formButton';
import studentService from './../services/studentService';
import * as moment from 'moment';
import {TeacherNames, info} from './AppConstants';


export default class EditStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: { 
        name: '',
        dob: '',
        contact_number: '',
        class_name: '',
        teacher_name: '',
        address: '',
        city: '',
        state: '',
        country: '',
      },
      formSubmitting: '',
      formErrorMessage: {
        name: null,
        dob: null,
        contact_number: null,
        class: null,
        teacher_name: null,
        address: null,
        city: null,
        state: null,
        country: null,
      },
      formValid: false,
      buttonDisabled: false,
  }
  this.baseState = this.state
  }

  componentDidMount = async () => {
    let studentData = await studentService.getOne(this.props.match.params.id);
    
    if(studentData) {
        studentData.dob = moment(studentData.dob).format("YYYY/MM/DD")

        this.setState( {
            formFields: studentData
        } )
    }
  }

  handleOnSubmit = (e) => {
    this.setState({...this.state})

    if(this.validateFields()) {
      this.updateStudent(); 
    } else {
      return false
    }
  }

  handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({formFields : {...this.state.formFields,
      [name]: value
    }})
    
    e.preventDefault();
  }
  
  updateStudent = async () => {
    this.setState({ formSubmitting: 'Submitting...' })

    this.setState({ buttonDisabled: true })
    
    try {
      await studentService.update(this.props.match.params.id, this.state.formFields);
      
      this.setState({ formSubmitting: 'Updated Successfully' })
      
      setTimeout(() => {
        this.setState(this.baseState)
      }, 2000);
    } catch(e) {
      this.setState({ formSubmitting: e.message })
    }
  }

  validateFields() {
    let formErrorMessage = this.state.formErrorMessage;

    formErrorMessage.name = ((this.state.formFields.name).length < 3) ? 'Please enter atleast 3 chars' : '';
    formErrorMessage.dob = ((this.state.formFields.dob).length < 1) ? 'Please enter dob' : '';
    
    if(this.state.formFields.dob !== '') {
      formErrorMessage.dob = (!moment(this.state.formFields.dob, 'YYYY/MM/DD', true).isValid()) ? 'Please enter a valid date' : ''
    }

    formErrorMessage.contact_number = ((this.state.formFields.contact_number).length < 1) ? 'Please enter contact number' : '';
    formErrorMessage.class_name = ((this.state.formFields.class_name).length < 1) ? 'Please enter class' : '';
    formErrorMessage.teacher_name = ((this.state.formFields.teacher_name).length < 1) ? 'Please select teacher' : '';
    
    if (!(formErrorMessage.name === ''
    && formErrorMessage.dob === ''
    && formErrorMessage.contact_number === ''
    && formErrorMessage.class_name === ''
    && formErrorMessage.teacher_name === '')) {
      this.setState({...this.state,
        formErrorMessage: formErrorMessage, 
        formValid: false
      });
      
      return false
    }
    
    return true
    
  }

  render() {
    return (
      <div>
      <h2>Edit Student</h2>
      <form>
        <div style={info}>{this.state.formSubmitting}</div>
        <div className="form-group">
          <FormFieldGroup type="text" name="name" className="form-control br-radius-zero" id="name"
                          placeholder="Your Name"
                          title="Name"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.name}
                          formValError={this.state.formErrorMessage.name}/>
        </div>
        
        <div className="form-group">
          <FormFieldGroup type="text" name="dob" className="form-control br-radius-zero" id="dob"
                          placeholder="YYYY/MM/DD"
                          title="DOB"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.dob}
                          formValError={this.state.formErrorMessage.dob}/>
        </div>

        <div className="form-group">
          <FormFieldGroup type="text" name="contact_number" className="form-control br-radius-zero" id="contact_number"
                          placeholder="Contact Number"
                          title="Contact Number"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.contact_number}
                          formValError={this.state.formErrorMessage.contact_number}/>
        </div>

        <div className="form-group">
          <FormFieldGroup type="text" name="class_name" className="form-control br-radius-zero" id="class_name"
                          placeholder="Class"
                          title="Class"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.class_name}
                          formValError={this.state.formErrorMessage.class_name}/>
        </div>

        <div className="form-group">
          <FormSelect name="teacher_name" className="form-control br-radius-zero" id="teacher_name"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.teacher_name}
                          title="Teacher Name"
                          items={TeacherNames}
                          formValError={this.state.formErrorMessage.teacher_name}/>
        </div>

        <div className="form-group">
          <FormFieldGroup type="text" name="address" className="form-control br-radius-zero" id="address"
                          placeholder="Address"
                          title="Address"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.address}
                          formValError={this.state.formErrorMessage.address}/>
        </div>

        <div className="form-group">
          <FormFieldGroup type="text" name="city" className="form-control br-radius-zero" id="city"
                          placeholder="City"
                          title="City"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.city}
                          formValError={this.state.formErrorMessage.city}/>
        </div>

        <div className="form-group">
          <FormFieldGroup type="text" name="state" className="form-control br-radius-zero" id="state"
                          placeholder="State"
                          title="State"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.state}
                          formValError={this.state.formErrorMessage.state}/>
        </div>

        <div className="form-group">
          <FormFieldGroup type="text" name="country" className="form-control br-radius-zero" id="country"
                          placeholder="Country"
                          title="Country"
                          handleOnChange={this.handleOnChange}
                          value={this.state.formFields.country}
                          formValError={this.state.formErrorMessage.country}/>
        </div>

        <div className="form-action">
          <FormButton
            action={this.handleOnSubmit}
            type='button'
            title='Update'
            className='btn btn-primary'
            disabled={this.state.buttonDisable}/>
        </div>
      </form>
      </div>
    );
  }
}