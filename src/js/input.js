import fetchCountries from './fetchCountries';
import refs from './refs';
import render from './render';

export default function onInputSearch(e) {
  const searchQuery = e.target.value;
  fetchCountries(searchQuery);
  if (searchQuery === '') {
    render.clearInput();
  }
}
