import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getAd, removeAd } from "./ad-detail-model.js"
import { buildDeleteButton, buildAdDetail } from "./ad-detail-view.js"

export async function adDetailController(adDetailContainer, adId) {

  try {
    const ad = await getAd(adId)
    const user = await getCurrentUserInfo();

    adDetailContainer.innerHTML = buildAdDetail(ad)

    if (user.id === ad.user.id) {
      const removeButtonElement = buildDeleteButton();
      adDetailContainer.appendChild(removeButtonElement);
      removeButtonElement.addEventListener("click", async () => {
        const shouldRemoveAd = confirm('¿Seguro que quieres borrar el ad?');
        if (shouldRemoveAd) {
          // gstión del error
          await removeAd(ad.id);
          window.location.href = "/"
        }
      })
    }
  } catch (error) {
    alert(error.message)
    window.location.href = "/"
  }
  
}


// 1- conocer quién es el dueño del ad mostrado. --> expand

// 2- conocer el identificador del usuario logado.

// 3- comparar el id del autor del ad mostrado con el id del usuario logado

// 4- si los id's son iguales, pintar el boton

// 5- cuando el botón se pulse, borrar el ad, previa confirmación
