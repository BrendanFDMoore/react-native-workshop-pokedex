export function get(url) {
  return fetch(url)
    .then((response) => response.json());
}

export function getAllPokemon() {
  const requestUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=801&offset=0';
//   const requestUrl = 'http://www.mocky.io/v2/57b6eab60f0000fa0b0b7a92';

  return get(requestUrl)
    .then((res) => {
      if (res.results) {
        return res.results;
      }

      throw new Error('Fetch failed');
    });
}

export function getPokemon(url) {
  return get(url);
}
