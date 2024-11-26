// modelo - obtención de datos que necesita nuestra aplicación

// los ads tienen q venir de SPARREST

export async function getAds() {
  try {
    const response = await fetch("http://localhost:8000/api/ads?_expand=user");
    const ads = await response.json();
    
    if (!response.ok) {
      throw new Error("Recurso no existente");
    }

    return ads;

  } catch (error) {
    throw new Error(error.message)
  }

  // try {
  //   const response = await fetch("http://localhost:8000/api/dsds");
  //   if (!response.ok) {
  //     throw new Error("Recurso no existente");
  //   }
  //   const ads = await response.json();
  //   return ads;
  // } catch (error) {
  //   return []
  // }

}
