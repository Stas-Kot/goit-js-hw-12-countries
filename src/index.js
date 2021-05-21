import './sass/main.scss';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import onInputSearch from './js/input';

refs.inputEl.addEventListener('input', debounce(onInputSearch, 500));
