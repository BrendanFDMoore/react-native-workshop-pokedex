import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
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
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder={this.props.placeholder}
            onChangeText={this.props.onSearchTextChange}>
          </TextInput>
        </View>        
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
    height: 80,
    alignSelf: 'stretch',
    padding: 10,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: '#CCCCCC',
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default SearchBar;


