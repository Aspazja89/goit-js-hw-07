import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Znajdź kontener galerii
const galleryContainer = document.querySelector(".gallery");

// Funkcja renderująca elementy galerii
const renderGallery = (items, container) => {
  const galleryMarkup = items
    .map(({ original, preview, description }) => {
      return `
        <li>
          <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join("");

  container.innerHTML = galleryMarkup;
};

// Renderuj galerię
renderGallery(galleryItems, galleryContainer);

// Inicjalizacja SimpleLightbox po załadowaniu zawartości strony
document.addEventListener("DOMContentLoaded", () => {
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250, // Opóźnienie wyświetlania podpisu
  });
});
console.log(galleryItems);
