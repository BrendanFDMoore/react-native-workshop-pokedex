import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Immutable, { List } from 'immutable';
import { connect } from 'react-redux';
import * as actions from '../actions';
import clrs from '../utils/clrs';
import { getPokemonImageUrl } from '../utils/pokemon';

const firstLetterUpper = (str) => {
  if (!(str.length>1)) {
    return str;
  } else {
    return [str.slice(0,1).toUpperCase(), str.slice(1)].join(''); 
  }
}

class MediaObject extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: this.props.imgUrl}} style={styles.image}>
          </Image>
        </View>
        <Text style={styles.name}>
          {firstLetterUpper(this.props.name)}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CCFFCC',
    height: 60,
    alignSelf: 'stretch',
  },
  imageWrapper : {
      justifyContent: 'center',
      alignSelf: 'stretch',
      // flex: 1,
  },
  image: {
    borderWidth: 1,
    borderColor: 'red',
    width: 38,
    height: 38,
    // paddingTop: 15,
  },
  name: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
    backgroundColor: '#55cc55',
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'center'
    // justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
    // height: 38,
  },
});

export default MediaObject;


