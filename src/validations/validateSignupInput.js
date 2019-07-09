import isEmpty from './isEmpty';

const reg = /^[a-zA-Z]+$/;
const regex = /^[a-z0-9][a-z0-9-_]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
const validateSignupInput = (data) => {
  const validationErrors = {
    status: 422,
  };
  if (isEmpty(data.email)) {
    validationErrors.email = 'Email field is empty';
  } else if (!regex.test(data.email)) {
    validationErrors.email = 'You have entered an invalid email';
  }
  if (isEmpty(data.confirmPassword)) {
    validationErrors.confirmPassword = 'Please confirm password';
  }
  if (isEmpty(data.firstName)) {
    validationErrors.firstName = 'First name field is empty';
  } else if (!reg.test(data.firstName)) {
    validationErrors.firstName = 'Invalid input for firstname';
  } else if (data.firstName.trim().length <= 3) {
    validationErrors.firstName = 'First name must contain a minimum of 3 characters';
  }
  if (isEmpty(data.lastName)) {
    validationErrors.lastName = 'Last name field is empty';
  } else if (!reg.test(data.lastName)) {
    validationErrors.lastName = 'Invalid input for lastname';
  } else if (data.lastName.trim().length <= 3) {
    validationErrors.lastName = 'Last name must contain a minimum of 3 characters';
  }
  if (isEmpty(data.password)) {
    validationErrors.password = 'Password must not be empty';
  } else if (data.password.length <= 8) {
    validationErrors.password = 'Password must contain a min of 8 characters';
  }
  // if (data.password !== data.confirmPassword) {
  //   validationErrors.password = 'passwords do not match';
  // }

  return {
    validationErrors,
    isValid: isEmpty(validationErrors),
  };
};

export default validateSignupInput;
