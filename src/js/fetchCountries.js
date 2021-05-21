import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import render from './render';

export default function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      return response.json();
    })
    .then(countries => {
      if (countries.length > 10) {
        const myAlert = error({
          text: 'Too many matches found, please enter a more specific query!',
          closer: true,
          width: '500px',
          delay: 3000,
        });
      } else if (countries.length > 1) {
        render.countryNamesList(countries);
      } else if (countries.length === 1) {
        render.country(countries[0]);
      }
    })
    .catch(error => {
      console.log(error);
    });
}
