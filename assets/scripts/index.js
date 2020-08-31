const btnSubmit = document.querySelector("#btn-submit"),
  formRegister = document.querySelector("#formRegister");

const typeErrors = [
  {
    errorType: "empty",
    errorMessage: (fieldName) => `${fieldName} cannot be empty`,
  },
  {
    errorType: "wrong Filled",
    errorMessage: (fieldName) => `Look like this is not an ${fieldName}`,
  },
];

const setErrorMessage = (error, field, fieldName) => {
  let input = formRegister.querySelector(`#${fieldName} + span`);

  return typeErrors.filter((type) => {
    if (type.errorType === error) {
      typeErrors.filter((err) => {
        if (err.errorType === error) {
          input.classList.add("showErrorMessage");
          input.innerHTML = err.errorMessage(field);
        }
      });
    }
  });
};

let fieldForm = [
  {
    fieldName: "firstName",
    hasError: false,
    setErrorMessage: (error) =>
      setErrorMessage(error, "First Name", "fieldFirstName"),
  },

  {
    fieldName: "lastName",
    hasError: false,
    setErrorMessage: (error) =>
      setErrorMessage(error, "Last Name", "fieldLastName"),
  },

  {
    fieldName: "email",
    hasError: false,
    setErrorMessage: (error) => setErrorMessage(error, "Email", "fieldEmail"),
  },

  {
    fieldName: "password",
    hasError: false,
    setErrorMessage: (error) =>
      setErrorMessage(error, "Password", "fieldPassword"),
  },
];

const handleValidationForm = (e) => {
  e.preventDefault();

  let input = formRegister.querySelectorAll(`input + span`);
  input.forEach((field) => field.classList.remove("showErrorMessage"));

  fieldForm.forEach((field) => {
    const { fieldName } = field;

    if (formRegister[fieldName].value === "") {
      field.hasError = true;
      field.setErrorMessage("empty");
    } else {
      field.hasError = false;
    }
  });

  let hasError = fieldForm.filter((field) => field.hasError === true);
  if (!hasError.length) {
    alert("Registered Successfully");
  }
};

btnSubmit.addEventListener("click", handleValidationForm);
