export const buildAd = (ad) => {
  const newAd = document.createElement('a');
  newAd.setAttribute("href", `/ad-detail.html?id=${ad.id}`);

  const createdAt = new Date(ad.updatedAt);
  const image = ad.image ? `<img src="${ad.image}" alt="Imagen del producto" />` : ''; 
  const price = ad.price ? `<span>Precio: ${ad.price}€</span>` : ''; 
  const type = ad.type ? `<span>${ad.type}</span>` : '';  // compra o venta

  newAd.innerHTML = `
    <div>
      ${image}
      <h3>${ad.name}</h3>
      <span>Usuario: ${ad.user.username} - ${createdAt.toLocaleDateString()}</span>
      <p>${ad.message}</p>
      ${price}
      ${type}
    </div>
  `;
  
  return newAd;
}

export function buildEmptyAdList() {
  return '<h2>No hay anuncios disponibles</h2>';
}
