// cálculo del html que vamos a mostrar al usuario

export const buildAd = (ad) => {
  const newAd = document.createElement('a');
  newAd.setAttribute("href", `/ad-detail.html?id=${ad.id}`);
  const createdAt = new Date(ad.updatedAt)
  newAd.innerHTML = `
    <div>
      <span>usuario: ${ad.user.username} - ${createdAt.toLocaleDateString()}</span>
      <p>${ad.message}</p>
    </div>
  `;
  return newAd;
}

export function buildEmptyAdList() {
  return '<h2>No hay anuncios disponibles</h2>';
}
