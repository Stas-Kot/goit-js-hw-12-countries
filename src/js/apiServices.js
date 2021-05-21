class ApiServices {
  #params = {
    searchQuery: '',
  };

  constructor() {
    URL = 'https://restcountries.eu/';
  }

  getCountries = () => fetch(`${URL}rest/v2/name/${this.searchQuery}`);

  get searchQuery() {
    return this.#params.searchQuery;
  }
  set searchQuery(q) {
    this.#params.searchQuery = q;
  }
}

const api = new ApiServices();

export default api;
