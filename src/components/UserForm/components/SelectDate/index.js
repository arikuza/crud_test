import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector } from 'redux-form';
import * as createActions from '../../../../actions';
import styles from './SelectDate.css';

const months = ['January', 'February', 'March', 'April', 'May', 'June	', 'July', 'August', 'September', 'October', 'November', 'December'];

const years = Array(80).fill(0).map((e,i)=>(new Date()).getFullYear()-i);

const selector = formValueSelector('userForm');

const SelectDate = ({ store, yearValue, monthValue, updateDays, days }) => (
  <div className={styles.container}>
    <label className={styles.label}>Birth date:</label>
    <div className={styles.wrap}>
      <Field
        name="birthYear"
        component='select'
      >
        <option value="">Select a birth year</option>
        {years.map(month =>
          <option value={month} key={month}>{month}</option>)}
      </Field>
      <Field
        name="birthMonth"
        component='select'
        disabled={!yearValue}
        onChange={(e, value)=>(updateDays(new Date(yearValue, value, 0).getDate()))}
      >
        <option value="">Select a birth month</option>
        {months.map((month, index) =>
          <option value={index + 1} key={month}>{month}</option>)}
      </Field>
      <Field
        name="birthDay"
        component='select'
        disabled={!monthValue}
      >
        <option value="">Select a birth day</option>
        {Array(days).fill(0).map((e,i)=>i+1).map(day =>
          <option value={day} key={day}>{day}</option>)}
      </Field>
    </div>
  </div>
);

const mapStateToProps = state => {
  const props = {
    days: state.birthDays.days,
    yearValue: selector(state, 'birthYear'),
    monthValue: selector(state, 'birthMonth'),
  }
  return props;
};

export default connect(mapStateToProps, createActions)(SelectDate);
