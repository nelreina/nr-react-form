import React from 'react';
import { connect } from 'react-redux';
import Highlight from 'react-highlight';
const SubmitResult = ({ form, name }) => {
  const values = form[name] ? form[name]['values'] || {} : {};
  const validationErrors = form[name] && form[name]['syncErrors'];
  return (
    <div className="result">
      <Highlight className="typescript form-state">
        {JSON.stringify({ values }, null, 2)}
      </Highlight>
    </div>
  );
};

export default connect(state => ({ form: state.form }))(SubmitResult);
