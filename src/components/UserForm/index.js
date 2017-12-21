import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import InputField from './components/InputField';
import { connect } from 'react-redux';
import SelectDate from './components/SelectDate';
import styles from './UserForm.css';

const required = value => (value ? undefined : 'This field is required');

const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength100 = maxLength(100);

const phoneNumber = value =>
  value && !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value) //eslint-disable-line
    ? 'Invalid phone number'
    : undefined;

class UserForm extends Component {

  addUser = (values) => {
    this.props.addUser(values);
    this.props.reset();
  }

  saveUser = (user) => {
    this.props.saveUser(user);
    this.props.clearUser();
    this.props.reset();
  }

  render() {

    const isEdit = this.props.initialValues.id;
    const onSubmit = isEdit ? this.saveUser : this.addUser; 

    return (
      <div className={styles.container}>
        <form
        onSubmit={this.props.handleSubmit(onSubmit)}
        >
          <InputField
            label="Name:"
            name="name"
            validate={[required, maxLength100]}
          />
          <SelectDate
            updateDays={this.props.updateDays}
          />
          <InputField
            label="Address:"
            name="adress"
            validate={[required, maxLength100]}
          />
          <InputField
            label="City:"
            name="city"
            validate={[required, maxLength100]}
          />
          <InputField
            label="Mobile number:"
            name="mobile"
            validate={phoneNumber}
            placeholder="8 (999) 123-45-64"
          />
          <button type='submit' className={styles.addUser}>{isEdit ? 'Save' : 'Add User'}</button>
        </form>
      </div>
    );
  }
}

export default connect(state => (
  {
    initialValues: state.userEdit,
  }),
)(reduxForm({ form: 'userForm', enableReinitialize: true })(UserForm));
