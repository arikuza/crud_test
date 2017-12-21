import React from 'react';
import { Field } from 'redux-form';
import styles from './InputField.css';

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div className={styles.inputWrap}>
      <input className={styles.inputField} {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
  </div>
)

const InputField = ({ name, label, placeholder, validate, warning }) => (
  <div className={styles.container}>
    <label className={styles.label}>{label}</label>
    <Field
      name={name}
      component={renderField}
      type='text'
      validate={validate}
      warn={warning}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
