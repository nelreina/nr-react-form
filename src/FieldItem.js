import React from 'react';
import { Field, FieldArray } from 'redux-form';
import RenderField from './RenderField';
import RenderFieldArray from './RenderFieldArray';

const FieldItem = props => {
  const { item: field, name, fieldname } = props;
  const inputName = fieldname ? `${fieldname}.${name}` : name;
  console.info('inputName', inputName);
  let item;
  switch (field.type) {
    case 'field-array':
      item = (
        <FieldArray
          name={name}
          {...field}
          component={RenderFieldArray}
          fieldname={name}
          {...props}
        />
      );
      break;

    default:
      item = <Field name={inputName} {...field} component={RenderField} />;
      break;
  }
  return item;
};

export default FieldItem;
