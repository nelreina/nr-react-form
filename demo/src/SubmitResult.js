import React from 'react';
import { connect } from 'react-redux';
import Highlight from 'react-highlight';
const SubmitResult = ({ form }) => {
  return (
    <Highlight className="typescript form-state">
      {JSON.stringify(form, null, 2)}
    </Highlight>
  );
};

export default connect(state => ({ form: state.form }))(SubmitResult);
