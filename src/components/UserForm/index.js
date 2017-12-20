import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import InputField from './components/InputField';
import styles from './UserForm.css';

const months = Array(12).fill(0).map((e,i)=>i+1);
const days = Array(31).fill(0).map((e,i)=>i+1);
const years = Array(150).fill(0).map((e,i)=>i+1950);

class UserForm extends Component {

  addUser = (values) => {
    this.props.addUser(values);
    this.props.reset();
  }

  render() {
    return (
      <div className={styles.container}>
        <form
        onSubmit={this.props.handleSubmit(this.addUser)}
        >
          <InputField label="User Name:" name="name" />
          <div className={styles.fieldWrap}>
            <label>Birth date:</label>
            <Field
              name="birthMonth"
              component='select'
            >
              <option value="">Select birth month</option>
              {months.map(month =>
                <option value={month} key={month}>{month}</option>)}
            </Field>
            <Field
              name="birthDay"
              component='select'
            >
              <option value="">Select birth day</option>
              {days.map(month =>
                <option value={month} key={month}>{month}</option>)}
            </Field>
            <Field
              name="birthYear"
              component='select'
            >
              <option value="">Select birth year</option>
              {years.map(month =>
                <option value={month} key={month}>{month}</option>)}
            </Field>
          </div>
          <InputField label="User adress:" name="adress" />
          <InputField label="City" name="city" />
          <InputField label="Mobile number" name="mobile" />
          <button type='submit'>Add User</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'userForm' })(UserForm);
