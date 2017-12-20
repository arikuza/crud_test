import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

const months = Array(12).fill(0).map((e,i)=>i+1);
const days = Array(31).fill(0).map((e,i)=>i+1);
const years = Array(150).fill(0).map((e,i)=>i+1850);

class UserForm extends Component {

  addUser = (values) => {
    this.props.addUser({ users: values });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.addUser)}>
        <div>
          <label>User name:</label>
          <Field
            name='name'
            required
            component='input'
            type='text'
          />
        </div>
        <div>
          <label>Birth date:</label>
          <Field name="birthMonth" component='select'>
            <option value="">Select birth month</option>
            {months.map(month =>
              <option value={month} key={month}>{month}</option>)}
          </Field>
          <Field name="birthDay" component='select'>
            <option value="">Select birth day</option>
            {days.map(month =>
              <option value={month} key={month}>{month}</option>)}
          </Field>
          <Field name="birthYear" component='select'>
            <option value="">Select birth year</option>
            {years.map(month =>
              <option value={month} key={month}>{month}</option>)}
          </Field>
        </div>
        <div>
          <label>User adress:</label>
          <Field
            name='adress'
            required
            component='input'
            type='text'
          />
        </div>
        <div>
          <label>City:</label>
          <Field
            name='city'
            required
            component='input'
            type='text'
          />
        </div>
        <div>
          <label>Mobile number:</label>
          <Field
            name='mobile'
            required
            component='input'
            type='text'
          />
        </div>
        <button type='submit'>Add User</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'userForm' })(UserForm);
