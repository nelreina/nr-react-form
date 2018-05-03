import React from 'react';
import getInputClass from './get-input-class';
import { humanize } from './util';

const FieldText = ({ meta, label, input, type }) => {
  console.info('FieldText', input);
  return (
    <input
      className={getInputClass(meta)}
      placeholder={`${humanize(input.name)}`}
      type={type}
      {...input}
    />
  );
};

export default FieldText;
