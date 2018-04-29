import React from 'react';
import getInputClass from './get-input-class';
import S from 'string';
const FieldText = ({ meta, label, input, type }) => {
  return (
    <input
      className={getInputClass(meta)}
      placeholder={`${
        S(input.name)
          .humanize()
          .titleCase().s
      }`}
      type={type}
      {...input}
    />
  );
};

export default FieldText;
