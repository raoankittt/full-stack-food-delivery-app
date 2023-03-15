export const createUserValidator = (name, email, password) => {
  const errors = {};

  if (name.trim() === "") {
    errors.name = "Name is required";
  }

  if (name.trim().length <= 6) {
    errors.name = "Name must be 6 characters or more";
  }

  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } /* else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  } */

  if (password.trim() === "") {
    errors.password = "Password is required";
  }
  if (password.trim().length <= 6) {
    errors.password = "Password must be 6 characters or more";
  }
  return {
    errors,
    valid: Object.keys(errors).length > 0,
  };
};

export const loginValidator = (email, password) => {
  const errors = {};
  if (email.trim() === "") {
    errors.email = "Email is required";
  }
  if (password.trim() === "") {
    errors.password = "Password is required";
  }
  return {
    errors,
    valid: Object.keys(errors).length > 0,
  };
};
