import ReduxForm from './ReduxForm';

export default (name, fields, onSubmit, buttonText = 'Submit') => {
  const form = new ReduxForm(name, fields, onSubmit, buttonText);
  return form.create();
};
