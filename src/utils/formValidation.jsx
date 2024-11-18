// utils/formValidation.js
export function validateForm(name, email, password) {
  const validation = {};

  // Validate name (for Sign-Up only)
  if (name?.current && !name.current.value.trim()) {
    validation.isNameValid = "Full name is required";
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.current.value.trim()) {
    validation.isEmailValid = "Email is required";
  } else if (!emailPattern.test(email.current.value)) {
    validation.isEmailValid = "Please enter a valid email address";
  }

  // Validate password
  if (!password.current.value.trim()) {
    validation.isPasswordValid = "Password is required";
  } else if (password.current.value.length < 6) {
    validation.isPasswordValid = "Password must be at least 6 characters long";
  }

  return validation;
}
