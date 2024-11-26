import { adDetailController } from "./ad-detail/ad-detail-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  
  // 1- obtener id del ad de la url
  const searchParams = new URLSearchParams(window.location.search);
  const adId = searchParams.get("id");

  // 2- acceder al nodo donde pintaremos el detalle del ad
  const adDetailContainer = document.querySelector("#ad-detail")
  
  adDetailController(adDetailContainer, adId)

})
