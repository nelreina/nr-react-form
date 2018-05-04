import React from 'react';
import List from 'nr-react-list';

import FieldItem from './FieldItem';
import { getInputType } from './util';

const RenderFieldArray = props => {
  const { nrs, fields } = props;
  return (
    <div>
      {fields.map((fieldname, idx) => {
        return (
          <div className="field-row" key={idx}>
            <div className="field-array">
              <List
                {...props}
                of={FieldItem}
                iterator={nrs}
                keyname="name"
                fieldname={fieldname}
              />
            </div>
            <button type="button" onClick={() => fields.remove(idx)}>
              -
            </button>
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
