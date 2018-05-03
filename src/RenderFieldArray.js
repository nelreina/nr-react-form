import React from 'react';
import List from 'nr-react-list';

import FieldItem from './FieldItem';
import { getInputType } from './util';

const RenderFieldArray = props => {
  const { fields } = props;
  return <List of={FieldItem} iterator={fields} keyname="name" {...props} />;
  // return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export default RenderFieldArray;
