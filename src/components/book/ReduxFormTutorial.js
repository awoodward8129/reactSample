import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../bookActions';


const renderField = field => (
    <div>
      <label>{field.input.label}</label>
      <input {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

class ReduxFormTutorial extends Component {



componentDidMount() {
  this.handleInitialize();
}
  //our other functions will go here

  render(){
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

      <Field name="firstName" type="text" component={renderField} label="First Name"/>
      <Field name="lastName" type="text" component={renderField} label="Last Name"/>
      <Field name="sex" component={renderSelect} label="Gender">
        <option></option>
        <option name="male">Male</option>
        <option name="female">Female</option>
      </Field>
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="phoneNumber" type="tel" component={renderField} label="Phone Number"/>

      <button action="submit">Save changes</button>
    </form>
    );
  }
}

const form = reduxForm({
  form: 'ReduxFormTutorial'
});

function handleInitialize() {
  const initData = {
    "firstName": this.props.currentUser.firstName,
    "lastName": this.props.currentUser.lastName,
    "sex": this.props.currentUser.sex,
    "email": this.props.userEmail,
    "phoneNumber": this.props.currentUser.phoneNumber
  };

  this.props.initialize(initData);
}


const renderSelect = field => (
  <div>
    <label>{field.input.label}</label>
    <select {...field.input}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, actions)(form(ReduxFormTutorial));
