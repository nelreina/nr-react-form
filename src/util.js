import React from 'react';
import S from 'string';

import FieldText from './Bootstrap/FieldText';
import FieldTextArea from './Bootstrap/FieldTextArea';
import FieldSelect from './Bootstrap/FieldSelect';
import FieldCheck from './Bootstrap/FieldCheck';

S.extendPrototype();

export const getInputType = (type, props) => {
  switch (type) {
    case 'select':
      return <FieldSelect {...props} />;
    case 'textarea':
      return <FieldTextArea {...props} />;
    case 'checkbox':
    case 'radio':
      return <FieldCheck type={type} {...props} />;
    default:
      return <FieldText type={type} {...props} />;
  }
};

export const humanize = text => text.humanize().titleCase();
