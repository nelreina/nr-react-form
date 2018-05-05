import React from 'react';
import List from 'nr-react-list';

import getInputClass from './get-input-class';
import Options from './FieldSelectOption';
const FieldSelect = ({ options, input, meta, label }) => {
  const { name } = input;
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <select className={getInputClass(meta)} {...input}>
        <option value="">Choose a {label || name}</option>
        <List of={Options} iterator={options} />
      </select>

      <div className="invalid-feedback">{meta.error}</div>
    </div>
  );
};

export default FieldSelect;
