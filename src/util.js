import React from 'react';
import FieldText from './FieldText';
import FieldSelect from './FieldSelect';
import S from 'string';
S.extendPrototype();
export const getInputType = (type, props) => {
  switch (type) {
    case 'select':
      return <FieldSelect {...props} />;
    default:
      return <FieldText type={type} {...props} />;
  }
};

export const humanize = text => text.humanize().titleCase();
