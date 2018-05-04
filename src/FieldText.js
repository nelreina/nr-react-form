import React from 'react';
import getInputClass from './get-input-class';
import { humanize } from './util';

const FieldText = ({ meta, label, input, type, placeholder }) => {
  return (
    <input
      className={getInputClass(meta)}
      placeholder={`${humanize(placeholder)}`}
      type={type}
      {...input}
    />
  );
};

export default FieldText;
