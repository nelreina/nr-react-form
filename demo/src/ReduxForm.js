import { ReduxFormClass as Form } from '../../src';
const job = ['Developer', 'Consultant', 'Project Manager'];
const isRequired = true;
const fields = {
  firstName: { type: 'text', isRequired, minLength: 3, maxLength: 10 },
  lastName: { type: 'text' },
  email: { type: 'email', isRequired },
  twitter: { type: 'twitter' },
  job: { type: 'select', options: job, isRequired },
  yearOfBirth: { maxLength: 4, minValue: 1900 }
};
const initValues = {
  firstName: 'Nelson',
  lastName: 'Reina',
  email: 'nelreina@gmail.com',
  twitter: '@nelreina',
  job: 'Developer'
};

const LoginForm = new Form('demo', fields, initValues)
  .button('Register', 'btn btn-dark btn-block')
  .getComponent();
export default LoginForm;
