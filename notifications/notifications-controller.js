import { buildNotification } from "./notifications-view.js";

export function notificationController(notificationContainer) {
  let timeoutId;

  const showNotification = (message, type = "success") => {
    clearTimeout(timeoutId);
    notificationContainer.innerHTML = buildNotification(message, type);

    timeoutId = setTimeout(() => {
      notificationContainer.innerHTML = "";
    }, 4000);
  };

  return {
    showNotification,
  };
}
