import Form from './ReduxFormClass';
const emailFields = {
  email: {
    type: 'email',
    label: 'Email Address'
  },
  password: {
    type: 'password',
    label: 'Password'
  }
};
const LoginForm = new Form('loginFormEmail', emailFields, {});
LoginForm.button('Login', 'btn btn-primary');
export default LoginForm.getComponent();
