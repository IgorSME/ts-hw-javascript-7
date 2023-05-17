import { galleryItems } from './gallery-items.js';
import { IItem } from './types/appTypes.js';

// import * as basicLightbox from 'basiclightbox';


const galleryEl:HTMLElement |null = document.querySelector(".gallery")
if (galleryEl) {
    galleryEl.addEventListener("click", onGetLargeImage);
    const galleryMarkup = createGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
}

const instance: basicLightbox.BasicLightBox | null = null;

function createGalleryItems(items:IItem[]):string {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
}

function onGetLargeImage(e:Event):void {
    e.preventDefault();
    const target = e.target as HTMLElement;


    if (target.dataset.source) {
        const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="800" height="600">
`, {
        onShow: () => {
        document.addEventListener("keydown", onCloseModalWithEscape);
        return true;
        }
        ,
        onClose: () => {
            document.removeEventListener("keydown", onCloseModalWithEscape);
            return true;
        
        }
        });
        instance.show();
    }
    

    

    function onCloseModalWithEscape (e:KeyboardEvent):void {
        if (e.key === "Escape" && instance) {
            instance.close();
            
        }
    }
    
}




