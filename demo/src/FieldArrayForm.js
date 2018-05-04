import { ReduxFormClass as Form } from '../../src';

const isRequired = true;

const fields = {
  clubName: { isRequired, minLength: 3, maxLength: 10 },
  member: {
    type: 'field-array',
    legend: 'Members',
    arrayFields: {
      firstName: {},
      lastName: {},
      age: {}
    }
  }
};

const init = {
  clubName: 'Chess Club',
  member: [
    {
      firstName: 'Marco',
      lastName: 'Stravanov',
      age: '44'
    },
    {
      firstName: 'Sue',
      lastName: 'Allen',
      age: '31'
    }
  ]
};

const FieldArrayForm = new Form('FieldArrayForm', fields, init)
  .button(null, 'btn btn-dark btn-block')
  .getComponent();
export default FieldArrayForm;
