import ReduxForm from './ReduxFormClass';

export default (name, fields, onSubmit, buttonText = 'Submit') => {
  const form = new ReduxForm(name, onSubmit, buttonText);
  return form.create(fields);
};
