import React from 'react';
import { Field } from 'redux-form';
import styles from './InputField.css';

const InputField = ({ name, label }) => (
  <div className={styles.fieldWrap}>
    <label>{label}</label>
    <Field
      name={name}
      required
      component='input'
      type='text'
    />
  </div>
);

export default InputField;
