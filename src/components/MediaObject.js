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

const rowColours = ['#CCFFCC', '#AACCAA'];

class MediaObject extends Component {

  render() {
    const rowStyle = [
      styles.container, 
      {'backgroundColor': rowColours[this.props.rowId % rowColours.length]}
    ];
    return (
      <TouchableOpacity style={rowStyle}>
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
    // backgroundColor: '#CCFFCC',
    height: 80,
    alignSelf: 'stretch',
  },
  imageWrapper : {
      justifyContent: 'center',
      alignSelf: 'stretch',
      // flex: 1,
      borderWidth: 1,
      borderColor: 'green',
  },
  image: {
    borderWidth: 1,
    borderColor: 'red',
    width: 58,
    height: 58,
    // paddingTop: 15,
  },
  name: {
    flex: 1,
    fontSize: 24,
    paddingLeft: 10,
    // backgroundColor: '#55cc55',
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    // height: 38,
  },
});

export default MediaObject;


