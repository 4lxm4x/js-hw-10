import SlimSelect from 'slim-select';
import fetchBreeds from './cat-api';
import './slimselect.css';
const selectorEl = document.querySelector('.breed-select');

fetchBreeds().then(breeds => {
  breeds.map(breed => {
    const { id, name } = breed;
    const selectOption = `<option value="${id}">${name}</option>`;
    console.log(id, name);
    selectorEl.insertAdjacentHTML('beforeend', selectOption);
  });
  const slimSelect = new SlimSelect({
    select: document.querySelector('#single'),
    settings: {
      placeholderText: 'Please select breed of cat',
    },
  });
});
