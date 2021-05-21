import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import render from './render';
import api from './apiServices';

export default function fetchCountries(searchQuery) {
  if (searchQuery !== '') {
    api
    .getCountries()
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
        render.clearInput();
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
}
