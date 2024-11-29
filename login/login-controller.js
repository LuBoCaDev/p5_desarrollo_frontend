import { REGEXP } from "../utils/constants.js";
import { loginUser } from "./login-model.js";
import { notificationController } from "../notifications/notification-controller.js";

export function loginController(loginForm) {
  const notificationContainer = document.querySelector("#notification-container");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userEmailElement = loginForm.querySelector("#user-mail");
    const passwordElement = loginForm.querySelector("#password");

    const userEmail = userEmailElement.value;
    const password = passwordElement.value;

    const emailRegExp = new RegExp(REGEXP.mail);
    if (!emailRegExp.test(userEmail)) {
      notificationController(
        notificationContainer,
        "Invalid email format. Please try again.",
        "error"
      );
      return;
    }

    handleLoginUser(userEmail, password);
  });

  async function handleLoginUser(userEmail, password) {
    try {
      const token = await loginUser(userEmail, password);
      localStorage.setItem("jwt", token);
      window.location.href = "/";
    } catch (error) {
      notificationController(
        notificationContainer,
        "Login failed. Please check your credentials and try again.",
        "error"
      );
    }
  }
}
