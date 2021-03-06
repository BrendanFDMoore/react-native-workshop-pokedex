import { fromJS } from 'immutable';
import { POKEMON } from '../constants';
import pokemonData from '../utils/pokemon-data.json';

const initialState = fromJS({
  all: [],
  query: '',
});

function pokemon(state = initialState, action = {}) {
  switch (action.type) {
    case POKEMON.FILTER_POKEMON:
      return state.set('query', fromJS(action.payload));
    case POKEMON.RECEIVED_ALL_POKEMONS:
      return state.set('all', fromJS(action.payload));
    default:
      return state;
  }
}

export default pokemon;
