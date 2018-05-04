import React from 'react';
import List from 'nr-react-list';

import FieldItem from './FieldItem';
import { getInputType } from './util';

const RenderFieldArray = props => {
  const { nrs, fields } = props;
  console.info(nrs);
  return (
    <div>
      {fields.map((fieldname, idx) => {
        return (
          <div>
            <List
              of={FieldItem}
              iterator={nrs}
              keyname="name"
              fieldname={fieldname}
              {...props}
            />
          </div>
        );
      })}
      <button type="button" onClick={() => fields.push()}>
        +
      </button>
    </div>
  );
};

export default RenderFieldArray;
