export function buildAdDetail(ad) {
  const createdAt = new Date(ad.updatedAt);
  
  return `
    <div>
      <span>${createdAt.toLocaleDateString()}</span>
      <h2>${ad.name}</h2>
      <p>${ad.description}</p>
      <p><strong>Price:</strong> $${ad.price}</p>
      <p><strong>Type:</strong> ${ad.type === 'buy' ? 'Buying' : 'Selling'}</p>
    </div>
  `;
}
