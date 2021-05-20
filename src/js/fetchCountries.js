import {error} from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

export default function fetchCountries(searchQuery) {
    fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(response => {
    return response.json();
}).then(countries => {
    console.log(countries);
    if (countries.length > 10) {
       const myAlert = error({
            text: "Too many matches found, please enter a more specific query!",
            closer: true,
            width: '500px',
            delay: 3000
        });
    } else if (2 < countries.length < 10) {
        console.log(countries);
        renderCountriesNameList(countries);
    } else {

    }
}).catch(error => {
    console.log(error);
})
};

const countriesListEl = document.querySelector('.countriesList');
console.log(countriesListEl);

const renderCountriesNameList = (countries) => {
    // const markup = countriesNameListTmp(countries);
    // console.log(markup);
    countriesListEl.innerHTML = '';
    countriesListEl.insertAdjacentHTML('beforeend', countries.map(e => `<li>${e.name}</li>`).join(''));
    // containerEl.insertAdjacentHTML('beforeend', markup)
}

const renderCountry = (country) => {
    countriesListEl.innerHTML = '';
    countriesListEl.insertAdjacentHTML('beforeend', country());
}
