import React from 'react';
import getInputClass from './get-input-class';

const FieldSelect = ({ options, input, meta, label }) => {
  const { name } = input;
  return (
    <select className={getInputClass(meta)} {...input}>
      <option value="">Choose a {label || name}</option>
      {options.map((option, key) => <option key={key}>{option}</option>)}
    </select>
  );
};

export default FieldSelect;
