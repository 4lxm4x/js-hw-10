import SlimSelect from 'slim-select';
import { fetchBreeds, fetchBreedById } from './cat-api';
import './slimselect.css';

const selectorEl = document.querySelector('.breed-select');

//=========== fetching breeds
fetchBreeds()
  .then(breeds => {
    breeds.map(breed => {
      const { id, name } = breed;
      const selectOption = `<option value="${id}">${name}</option>`;
      selectorEl.insertAdjacentHTML('beforeend', selectOption);
    });

    const slimSelect = new SlimSelect({
      select: document.querySelector('#single'),
      settings: {
        placeholderText: 'Please select breed of cat',
      },
    });

    return { slimSelect, breeds };
  })

  .then(({ slimSelect, breeds }) => {
    selectorEl.addEventListener('change', onSelectBreed);
    function onSelectBreed(e) {
      //======== clearing blank and inserting loader
      document.querySelector('.cat-info').innerHTML = '';
      document.querySelector('.cat-info').insertAdjacentHTML(
        'beforeend',
        `<div class="loader-blank">
            <span class="loader">L &nbsp; ading of chosen cat</span>
          </div>`
      );
      //=============== setted timeout 1500ms to demonstrate loader
      setTimeout(() => {
        const catId = slimSelect.getSelected()[0];
        const selectedBreed = breeds.filter(breed => {
          return breed.id === catId;
        }); // filtering selected breed from breeds set, fetched before to get description and temperament

        // ======= fetching cat photo, cleaning blank and inserting elements with photo and info into html
        fetchBreedById(catId).then(breed => {
          document.querySelector('.cat-info').innerHTML = '';

          document.querySelector('.cat-info').insertAdjacentHTML(
            'beforeend',
            `<img src="${breed[0].url}" alt="" width="512px" />
      
      <div class='cat-info-desc'>
      <h1>${selectedBreed[0].name}</h1>
            <p>${selectedBreed[0].description}</p>
      <p><b>Temperament: </b>${selectedBreed[0].temperament}</p>
        </div>`
          );
        });
      }, 1500);
    }
  });
