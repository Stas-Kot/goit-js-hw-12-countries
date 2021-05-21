import countryNamesTpl from '../templates/countriesNames.hbs';
import countryTpl from '../templates/country.hbs';
import refs from './refs';

const countryNamesList = countries => {
  const countryNamesMarkup = countryNamesTpl({ countries });

  clearInput();
  refs.countriesListEl.insertAdjacentHTML('beforeend', countryNamesMarkup);
};

const country = countries => {
  const countryMarkup = countryTpl(countries);

  clearInput();
  refs.countriesListEl.insertAdjacentHTML('beforeend', countryMarkup);
};

const clearInput = () => {
  refs.countriesListEl.innerHTML = '';
};

export default {
  countryNamesList,
  country,
  clearInput,
};
