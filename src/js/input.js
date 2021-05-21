import fetchCountries from './fetchCountries';
import refs from './refs';
import render from './render';
import api from './apiServices';

export default function onInputSearch(e) {
  api.searchQuery = e.target.value;
  fetchCountries(api.searchQuery);
  if (api.searchQuery === '') {
    render.clearInput();
  }
}
