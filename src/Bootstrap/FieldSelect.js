import React from 'react';
import List from 'nr-react-list';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { change as fieldChange } from 'redux-form';

import getInputClass from './get-input-class';
import Options from './FieldSelectOption';
const FieldSelect = ({
  options,
  reduxstate,
  optionKey,
  stateOptions,
  form,
  formname,
  info,
  input,
  meta,
  label,
  resetOnChange,
  fieldChange
}) => {
  const { name, onChange } = input;
  let selectOptions;
  if (optionKey) {
    if (options) {
      selectOptions = options[optionKey];
    } else if (reduxstate) {
      const key = get(form, `${formname}.values.${optionKey}`, '');
      selectOptions = get(stateOptions, `${reduxstate}.${key}`, {});
      // return reduxstate;
    } else {
      return 'No options has been given';
    }
  } else {
    if (options) {
      selectOptions = options;
    } else if (reduxstate) {
      selectOptions = get(stateOptions, reduxstate, {});
      // return reduxstate;
    } else {
      return 'No options has been given';
    }
  }
  const selectChange = evt => {
    const { value } = evt.target;
    if (resetOnChange) {
      fieldChange(formname, resetOnChange, '');
    }
    onChange(value);
  };
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <select
        className={getInputClass(meta)}
        {...input}
        onChange={selectChange}
      >
        <option value="">Choose a {label || name} </option>
        <List of={Options} iterator={selectOptions} />
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {resetOnChange && (
        <pre>{JSON.stringify(typeof fieldChange, null, 2)}</pre>
      )}

      <div className="invalid-feedback">{meta.error}</div>
    </div>
  );
};
const msp = state => ({ stateOptions: state, form: state.form });
export default connect(msp, { fieldChange })(FieldSelect);
