import { galleryItems } from "./gallery-items.js";

const divEl = document.querySelector(".gallery");
const createGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

divEl.insertAdjacentHTML("afterbegin", createGalleryItems);

const handleOpenImg = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  let bannerImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${bannerImg}" width="800" height="600">`);

  instance.show();

  const handleCloseModal = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  document.addEventListener("keydown", handleCloseModal);
};

divEl.addEventListener("click", handleOpenImg);
