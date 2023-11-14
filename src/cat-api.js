import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'ive_NR8uTYLCtmQoFFQBat0PVYtjT605y1j6PhoeGhn8VDnvIpTWj3aeXnp37Nj7XspW';

const BASE_URL = `https://api.thecatapi.com/v1/`;

export function fetchBreeds() {
  return fetch(`${BASE_URL}breeds`)
    .then(breeds => breeds.json())
    .then(breeds => {
      return breeds;
    })
    .catch(err => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}

export function fetchBreedById(catId) {
  return fetch(`${BASE_URL}images/search?breed_ids=${catId}`)
    .then(breed => breed.json())
    .then(breed => {
      return breed;
    })
    .catch(err => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}
