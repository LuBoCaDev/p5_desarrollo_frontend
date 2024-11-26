import { createAd } from "./create-ad-model.js";

export function createAdController(createAdForm) {
  // 1- escuchar al evento submit para obtener los datos de creacion de ad
  createAdForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const textAreaElement = createAdForm.querySelector("#ad-content");
    const adMessage = textAreaElement.value;

    handleAdCreation(adMessage)
  })

  async function handleAdCreation(AdMessage) {
    // 2- crear ad
    try {
      await createAd(adMessage)
      window.location.href = "/"
    } catch (error) {
      alert(error.message)
    }
  }

}
