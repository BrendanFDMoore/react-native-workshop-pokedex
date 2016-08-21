import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Immutable, { List } from 'immutable';
import { connect } from 'react-redux';
import * as actions from '../actions';
import clrs from '../utils/clrs';
import Header from '../components/Header';
import MediaObject from '../components/MediaObject';
import SearchBar from '../components/SearchBar';
import { getPokemonImageUrl } from '../utils/pokemon';

class Pokedex extends Component {

  render() {
    const pokeMediaObjects = (pokemonData) => {
        console.log('pokemonData:', pokemonData);
        if (pokemonData.length <1 )
          return (<MediaObject name="No results to display"></MediaObject>)
        let pokeMOs = pokemonData.map((p, index) => <MediaObject key={index} name={p.name} imgUrl={getPokemonImageUrl(p)}></MediaObject>);
        
        console.log('pokeMOs:', pokeMOs);
        
        return (
            pokeMOs
        );
    };
    
    return (
      <View style={styles.container}>
        <Header title="POKEDEX!">
        </Header>
        <View style={styles.body}>
            {pokeMediaObjects(this.props.pokemon)}
        </View>
        <View style={styles.footer}>
            <SearchBar>
            </SearchBar>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  body: {
    flex: 1,
    backgroundColor: '#33FFFF',
    alignSelf: 'stretch',
  },
  footer: {
    // textAlign: 'center',
    backgroundColor: '#333333',
    marginBottom: 5,
    alignSelf: 'stretch',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pokedex);

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon.get('all').toJS(),
    query: state.pokemon.get('query'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filter: query => dispatch(actions.filter(query)),
  };
}
