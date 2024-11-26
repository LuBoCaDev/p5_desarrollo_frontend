export function buildAdDetail(ad) {
  const createdAt = new Date(ad.updatedAt);

  return `
    <div>
      <span>${createdAt.toLocaleDateString()}</span>
      <p>${ad.message}</p>
    </div>
  `
}

export function buildDeleteButton() {
  const removeButton = document.createElement('button');
  removeButton.textContent = "Borrar ad";

  return removeButton;
}
