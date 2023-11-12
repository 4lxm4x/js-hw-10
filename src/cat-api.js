import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'ive_NR8uTYLCtmQoFFQBat0PVYtjT605y1j6PhoeGhn8VDnvIpTWj3aeXnp37Nj7XspW';

const url = `https://api.thecatapi.com/v1/breeds`;

function fetchBreeds() {
  return fetch(url)
    .then(breeds => breeds.json())
    .then(breeds => {
      return breeds;
    })
    .catch(err => console.log(err));
}

export default fetchBreeds;
