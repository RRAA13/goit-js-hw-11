import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchText = event.currentTarget.elements['search-text'].value.trim();

  if (searchText === '') {
    iziToast.error({
      message: 'Please fill in the field!',
      position: 'topRight',
    });

    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchText)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});