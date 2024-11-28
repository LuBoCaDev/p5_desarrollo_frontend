import { REGEXP } from "../utils/constants.js";
import { createUser } from "./signup-model.js";

export function signupController(form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userEmailElement = form.querySelector("#user-mail");
    const passwordElement = form.querySelector("#password");
    const passwordConfirmElement = form.querySelector("#password-confirm");

    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    const passwordConfirm = passwordConfirmElement.value;

    const errors = [];

    const emailRegExp = new RegExp(REGEXP.mail);

    if (!emailRegExp.test(userEmail)) {
      errors.push("The email format is not valid");
    }

    if (password !== passwordConfirm) {
      errors.push("The passwords provided do not match");
    }

    if (errors.length > 0) {
      for (const error of errors) {
        const errorEvent = new CustomEvent("load-info", {
          detail: {
            message: error,
            type: "error",
          },
        });
        form.dispatchEvent(errorEvent);
      }
      return;
    }

    try {
      await handleCreateUser(userEmail, password);

      const successEvent = new CustomEvent("load-info", {
        detail: {
          message: "User created successfully!",
          type: "success",
        },
      });
      form.dispatchEvent(successEvent);

      window.location.href = "/";
    } catch (error) {

      const errorEvent = new CustomEvent("load-info", {
        detail: {
          message: error.message,
          type: "error",
        },
      });
      form.dispatchEvent(errorEvent);
    }
  });
}

async function handleCreateUser(userEmail, password) {
  await createUser(userEmail, password);
}
