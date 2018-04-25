import React from 'react';
import { Field } from 'redux-form';
import BootstrapField from './BootstrapField';

const FieldItem = ({ item: field }) => {
  const { type, name, label } = field;
  return (
    <Field type={type} name={name} label={label} component={BootstrapField} />
  );
};

export default FieldItem;
