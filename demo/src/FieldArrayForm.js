import { ReduxFormClass as Form } from '../../src';

const isRequired = true;

const fields = {
  clubName: { isRequired, minLength: 3, maxLength: 10 },
  member: {
    type: 'field-array',
    fields: {
      firstName: { isRequired },
      lastName: { isRequired }
    }
  }
};

const FieldArrayForm = new Form('FieldArrayForm', fields)
  .button(null, 'btn btn-dark btn-block')
  .getComponent();
export default FieldArrayForm;
