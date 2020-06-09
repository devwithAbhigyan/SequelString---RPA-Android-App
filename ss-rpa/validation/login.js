const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Mobile checks
  if (Validator.isEmpty(data.mobile)) {
    errors.password = "Mobile field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
