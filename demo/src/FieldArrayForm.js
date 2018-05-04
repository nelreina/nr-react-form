import { ReduxFormClass as Form } from '../../src';

const isRequired = true;

const fields = {
  clubName: { isRequired, minLength: 3, maxLength: 10 },
  member: {
    type: 'field-array',
    legend: 'Members',
    nrs: {
      firstName: {},
      lastName: {},
      age: { type: 'number' }
    }
  }
};

const init = {
  clubName: 'Domino',
  member: [
    {
      firstName: 'Nelson',
      lastName: 'Reina',
      age: '44'
    },
    {
      firstName: 'Alan',
      lastName: 'Boye',
      age: '31'
    },
    {
      firstName: 'Romeo',
      lastName: 'Mans',
      age: '30'
    },
    {
      firstName: 'Patricia',
      lastName: 'Lake',
      age: '46'
    },
    null
  ]
};

const FieldArrayForm = new Form('FieldArrayForm', fields, init)
  .button(null, 'btn btn-dark btn-block')
  .getComponent();
export default FieldArrayForm;
