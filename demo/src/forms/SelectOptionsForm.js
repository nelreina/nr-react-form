import { ReduxFormClass as Form } from '../../../src';
const static1Options = ['Star Wars', 'Star Trek'];
const static2Options = [
  { value: 432, label: 'Bose' },
  { value: 433, label: 'JBL' }
];

const fields = {
  film: {
    type: 'select',
    options: static1Options,
    info: `Static Array of Strings ['Star Wars', 'Star Trek']`
  },
  speakers: {
    type: 'select',
    options: static2Options,
    info: `Static Array of Objects [
      { value: 432, label: 'Bose' },
      { value: 433, label: 'JBL' }
    ]`
  },
  os: {
    type: 'select',
    reduxstate: 'os.data.types',
    label: 'Operating System',
    info: `Provide a redux store state with the options e.g.: state: 'os.types'`,
    resetOnChange: 'version'
  },
  version: {
    type: 'select',
    reduxstate: 'os.data.versions',
    label: 'OS Version',
    optionKey: 'os',
    info: `These options are dependend on 'Operating System' field`,
    isRequired: true
  }
};

const SelectOptionsForm = new Form('SelectOptionsForm', fields)
  .button(null, 'btn btn-success')
  .getComponent();
export default SelectOptionsForm;
