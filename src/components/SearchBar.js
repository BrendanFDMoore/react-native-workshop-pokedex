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
import { getPokemonImageUrl } from '../utils/pokemon';

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Search bar oh yeaaa
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDD55',
    height: 60,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SearchBar;


