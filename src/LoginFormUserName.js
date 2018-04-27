import Form from './ReduxFormClass';
const usernameFields = [
  {
    name: 'username',
    type: 'text',
    label: 'Username'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
];
const LoginForm = new Form('loginFormUserName', usernameFields, {});
LoginForm.button('Login', 'btn btn-primary');
export default LoginForm.getComponent();
