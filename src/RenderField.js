import React from 'react';
import FieldText from './FieldText';
import FieldSelect from './FieldSelect';
import pt from 'prop-types';

const getInputType = (type, props) => {
  switch (type) {
    case 'select':
      return <FieldSelect {...props} />;
    default:
      return <FieldText type={type} {...props} />;
  }
};

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
