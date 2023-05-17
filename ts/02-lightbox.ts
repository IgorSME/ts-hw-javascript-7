import { galleryItems } from './gallery-items';
import { IItem } from './types/appTypes';
import SimpleLightbox from 'simplelightbox';


// Rest of your code



console.log(galleryItems);


const galleryEl:HTMLElement |null = document.querySelector(".gallery")
if (galleryEl) {
    // galleryEl.addEventListener("click", onGetLargeImage)
const galleryMarkup = createGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
}

function createGalleryItems(items:IItem[]):string {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
    }).join("")
}

//  new SimpleLightbox('.gallery a', { "captionsData": "alt", "captionDelay": 250 });

const lightbox = new SimpleLightbox('.gallery a', {
  "captionsData": 'alt',  "captionDelay": 250
});
