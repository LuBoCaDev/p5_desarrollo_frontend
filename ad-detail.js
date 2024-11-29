import { adDetailController } from "./ad-detail/ad-detail-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  
  const searchParams = new URLSearchParams(window.location.search);
  const adId = searchParams.get("id");

  const adDetailContainer = document.querySelector("#ad-detail");

  adDetailController(adDetailContainer, adId).catch(error => {
    const errorEvent = new CustomEvent("load-info", {
      detail: {
        message: error.message,
        type: "error",
      },
    });
    document.querySelector(".notifications-container").dispatchEvent(errorEvent);
  });
});
