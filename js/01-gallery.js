import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Znajdź kontener galerii
const galleryContainer = document.querySelector(".gallery");

// Funkcja renderująca elementy galerii
const renderGallery = (items, container) => {
  const galleryMarkup = items
    .map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join("");

  container.innerHTML = galleryMarkup;
};

// Renderuj galerię
renderGallery(galleryItems, galleryContainer);

// Nasłuchuj kliknięć na obrazkach w galerii
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault(); // Zapobiegnij domyślnej akcji przekierowania

  // Sprawdź czy kliknięto na obrazek
  if (event.target.nodeName === "IMG") {
    // Pobierz adres obrazka docelowego
    const largeImageURL = event.target.dataset.source;

    // Utwórz nowy obiekt basicLightbox z adresem obrazka docelowego
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="">
    `);

    // Otwórz okno modalne
    instance.show();

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    };

    document.addEventListener("keyup", closeOnEscape);
  }
});
console.log(galleryItems);
