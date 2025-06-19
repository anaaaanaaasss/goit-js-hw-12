let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

import './css/styles.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  currentPage = 1;
  const query = e.target.elements.searchQuery.value.trim();
  currentQuery = query;

  if (!query) {
    iziToast.warning({ message: 'Будь ласка, введіть слово для пошуку!', position: 'topRight' });
    return;
  }

  loadMoreBtn.classList.add('is-hidden');
  clearGallery();
  showLoader();

  try {
    showLoader();
    const data = await getImagesByQuery(query, currentPage);
    const images = data.hits;

    if (images.length === 0) {
      iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!', position: 'topRight' });
    } else {
      createGallery(images);
      totalHits = data.totalHits;
      if (totalHits > 15) {
        loadMoreBtn.classList.remove('is-hidden');
      }
      // здесь можно показать кнопку "Load more", если элементов больше, чем 15
    }
  } catch (err) {
    iziToast.error({ message: 'Сталася помилка. Спробуйте ще раз.', position: 'topRight' });
  } finally {
    hideLoader();
  }
});

const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelectorAll('.loader')[1]; // второй лоадер под кнопкой

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  loader.classList.remove('is-hidden');

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);
    lightbox.refresh();
    scrollSmooth();

    if (currentPage * 15 >= totalHits) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results."
      });
    }
  } catch (err) {
    iziToast.error({ message: 'Ошибка при загрузке', position: 'topRight' });
  } finally {
    loader.classList.add('is-hidden');
  }
});

function scrollSmooth() {
  const { height } = document.querySelector('.gallery-item').getBoundingClientRect();
  window.scrollBy({ top: height * 2, behavior: 'smooth' });
}