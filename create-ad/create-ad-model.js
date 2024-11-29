export async function createAd(adData) {
  const token = localStorage.getItem("jwt");

  const formData = new FormData();
  formData.append("photo", adData.photo);
  formData.append("name", adData.name);
  formData.append("description", adData.description);
  formData.append("price", adData.price);
  formData.append("type", adData.type);

  const response = await fetch("http://localhost:8000/api/ads", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorMessage =
      response.status === 400
        ? "Invalid data. Please check your input."
        : "Error creating ad. Please try again.";
    throw new Error(errorMessage);
  }
}
