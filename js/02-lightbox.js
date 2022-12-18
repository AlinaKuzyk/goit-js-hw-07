import { galleryItems } from "./gallery-items.js";

const divEl = document.querySelector(".gallery");
const createGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
  })
  .join("");

divEl.insertAdjacentHTML("afterbegin", createGalleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250ms",
});
