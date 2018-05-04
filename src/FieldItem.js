import React from 'react';
import { Field, FieldArray } from 'redux-form';
import RenderField from './RenderField';
import RenderFieldArray from './RenderFieldArray';

const FieldItem = props => {
  const { item: field, name } = props;
  const { nrs } = field;
  let item;
  switch (field.type) {
    case 'field-array':
      item = (
        <FieldArray
          {...props}
          name={name}
          {...field}
          component={RenderFieldArray}
        />
      );
      break;

    default:
      item = <Field name={name} {...field} component={RenderField} />;
      break;
  }
  return item;
};

export default FieldItem;
