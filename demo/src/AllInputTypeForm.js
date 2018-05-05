import { ReduxFormClass as Form } from '../../src';

const isRequired = true;

const fields = {
  textInput: { label: 'Text Input' },
  emailInput: { label: 'Email Input', type: 'email' },
  rangeInput: { label: 'Range Input', type: 'range' },
  selectInput: {
    label: 'Select Input',
    type: 'select',
    options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]
  },
  textareaInput: { label: 'TextArea Input', type: 'textarea' },
  checkboxInput: { label: 'Check Box', type: 'checkbox' }
};

const AllInputType = new Form('AllInputType', fields)
  .button('Simple', 'btn btn-dark btn-block')
  .getComponent();
export default AllInputType;
