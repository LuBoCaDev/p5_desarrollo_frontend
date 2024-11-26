import { notificationController } from "./notifications/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";
import { adsController } from "./ads/ads-controller.js";

document.addEventListener("DOMContentLoaded", () => {

  const adsContainer = document.querySelector("#ads-container");
  const notificationsContainer = document.querySelector("#notifications-container");
  const sessionContainer = document.querySelector("#session");

  sessionController(sessionContainer)
  adsController(adsContainer)
  const { showNotification } = notificationController(notificationsContainer)

  adsContainer.addEventListener("loading-ads-info", (event) => {
    showNotification(event.detail.message, event.detail.type);
  })
})
