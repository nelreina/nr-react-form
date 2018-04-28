import { ReduxFormClass as Form } from '../../src';
const job = ['Developer', 'Consultant', 'Project Manager'];
const fields = {
  firstName: { type: 'text' },
  lastName: { type: 'text' },
  email: { type: 'email' },
  twitter: { type: 'text' },
  job: { type: 'select', options: job }
};
const initValues = {
  firstName: 'Nelson',
  lastName: 'Reina',
  email: 'nelreina@gmail.con',
  twitter: '@nelreina',
  job: 'Developer'
};

const LoginForm = new Form('demo', fields, initValues)
  .button('Register', 'btn btn-dark btn-block')
  .getComponent();
export default LoginForm;
