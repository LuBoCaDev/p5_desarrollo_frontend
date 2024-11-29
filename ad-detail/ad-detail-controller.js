import { getCurrentUserInfo } from "../auth/auth-model.js";
import { getAd, removeAd } from "./ad-detail-model.js";
import { buildDeleteButton, buildAdDetail } from "./ad-detail-view.js";

export async function adDetailController(adDetailContainer, adId) {
  try {
    const ad = await getAd(adId);
    const user = await getCurrentUserInfo();

    adDetailContainer.innerHTML = buildAdDetail(ad);

    if (user.id === ad.user.id) {
      const removeButtonElement = buildDeleteButton();
      adDetailContainer.appendChild(removeButtonElement);
      removeButtonElement.addEventListener("click", async () => {
        const shouldRemoveAd = confirm('¿Seguro que quieres borrar el ad?');
        if (shouldRemoveAd) {
          try {
            await removeAd(ad.id);
            const successEvent = new CustomEvent("load-info", {
              detail: {
                message: "Ad successfully removed!",
                type: "success",
              },
            });
            document.querySelector(".notifications-container").dispatchEvent(successEvent);
            window.location.href = "/";
          } catch (error) {
            const errorEvent = new CustomEvent("load-info", {
              detail: {
                message: error.message,
                type: "error",
              },
            });
            document.querySelector(".notifications-container").dispatchEvent(errorEvent);
          }
        }
      });
    }
  } catch (error) {
    const errorEvent = new CustomEvent("load-info", {
      detail: {
        message: error.message,
        type: "error",
      },
    });
    document.querySelector(".notifications-container").dispatchEvent(errorEvent);
    window.location.href = "/";
  }
}
