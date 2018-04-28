import React from 'react';
import List from 'nr-react-list';

import getInputClass from './get-input-class';
import Options from './FieldSelectOption';
const FieldSelect = ({ options, input, meta, label }) => {
  const { name } = input;
  return (
    <select className={getInputClass(meta)} {...input}>
      <option value="">Choose a {label || name}</option>
      <List of={Options} iterator={options} />
    </select>
  );
};

export default FieldSelect;
