import React from 'react';
import { isObject } from 'lodash';

const FieldSelectOption = ({ item: option }) => {
  if (isObject(option)) {
    return <option value={option.value}>{option.text}</option>;
  } else {
    return <option>{option}</option>;
  }
};

export default FieldSelectOption;
