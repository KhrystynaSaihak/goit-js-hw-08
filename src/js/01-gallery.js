// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

console.log(galleryItems);
const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

const createGalleryMarkup = galleryItems => {
  return galleryItems
    .map(item => {
      return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    })
    .join('');
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
