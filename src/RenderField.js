import React from 'react';

import pt from 'prop-types';
import { getInputType } from './util';
let RenderField = props => {
  const { type, meta, label } = props;
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      {getInputType(type, props)}
      <div className="invalid-feedback">{meta.error}</div>
    </div>
  );
};

RenderField.propTypes = {
  type: pt.string,
  meta: pt.any,
  label: pt.string
};

RenderField.defaultProps = {
  type: 'text'
};

export default RenderField;
