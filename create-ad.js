import { createAdController } from "./create-ad/create-ad-controller.js";
import { isUserLoggedIn } from "./utils/auth.js"

debugger;
if (!isUserLoggedIn()) {
  window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", () => {
  const createAdForm = document.querySelector('form');

  createAdController(createAdForm)
})
