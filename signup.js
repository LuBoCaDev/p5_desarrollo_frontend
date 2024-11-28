import { notificationController } from "./notifications/notification-controller.js";
import { signupController } from "./signup/signup-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector("form");
  const notificationContainer = document.querySelector("#notifications-container");

  const { showNotification } = notificationController(notificationContainer);

  signupController(signupForm);

  signupForm.addEventListener("load-info", (event) => {
    const { message, type } = event.detail;
    showNotification(message, type);
  });
});
