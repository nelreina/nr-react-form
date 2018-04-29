import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import S from 'string';
export const checkRequiredFields = (value, config, name) => {
  if (config.isRequired && (!value || value.trim() === '')) {
    return {
      [name]: `${config.label ||
        S(name)
          .humanize()
          .titleCase().s} is required`
    };
  } else {
    return undefined;
  }
};
export const checkType = (value, config, name) => {
  switch (config.type) {
    case 'email':
      return !isEmail(value || '')
        ? { [name]: 'Not valid email address' }
        : undefined;
    case 'twitter':
      return !S(value || '').startsWith('@')
        ? { [name]: 'Not valid twitter handle' }
        : undefined;
    default:
      return undefined;
  }
};
export const checkMinLength = (value, config, name) => {
  if (config.minLength) {
    const min = config.minLength;
    if (!isLength(value || '', { min })) {
      return {
        [name]: `${config.label ||
          S(name)
            .humanize()
            .titleCase().s} must be ${min} characters or more`
      };
    }
  } else {
    return undefined;
  }
};
export const checkMaxLength = (value, config, name) => {
  if (config.maxLength) {
    const max = config.maxLength;
    if (!isLength(value || '', { max })) {
      return {
        [name]: `${config.label ||
          S(name)
            .humanize()
            .titleCase().s} must be ${max} characters or less`
      };
    }
  } else {
    return undefined;
  }
};
