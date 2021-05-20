import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';


const inputEl = document.getElementById('input');
inputEl.addEventListener('input', debounce(onInputSearch, 500));

function onInputSearch(e) {
    console.log(e.target.value);
    const searchQuery = e.target.value;
    fetchCountries(searchQuery);
}
