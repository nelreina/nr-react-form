import Form from './ReduxFormClass';
const emailFields = [
  {
    name: 'email',
    type: 'email',
    label: 'Email Address'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
];
const LoginForm = new Form('loginFormEmail', emailFields, {});
LoginForm.button('Login', 'btn btn-primary');
export default LoginForm.getComponent();
