import { createAd } from "./create-ad-model.js";

export function createAdController(createAdForm) {
  createAdForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const photoElement = createAdForm.querySelector("#ad-photo");
    const nameElement = createAdForm.querySelector("#ad-name");
    const descriptionElement = createAdForm.querySelector("#ad-description");
    const priceElement = createAdForm.querySelector("#ad-price");
    const typeElement = createAdForm.querySelector("#ad-type");

    const adData = {
      photo: photoElement.files[0],
      name: nameElement.value,
      description: descriptionElement.value,
      price: parseFloat(priceElement.value),
      type: typeElement.value, // "buy" o "sell"
    };

    handleAdCreation(adData);
  });

  async function handleAdCreation(adData) {
    try {
      await createAd(adData);


      const successEvent = new CustomEvent("load-info", {
        detail: {
          message: "Ad created successfully!",
          type: "success",
        },
      });
      createAdForm.dispatchEvent(successEvent);

      window.location.href = "/";
    } catch (error) {

      const errorEvent = new CustomEvent("load-info", {
        detail: {
          message: error.message || "Error creating the ad",
          type: "error",
        },
      });
      createAdForm.dispatchEvent(errorEvent);
    }
  }
}
