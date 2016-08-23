import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
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

  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({
      sectionHeaderHasChanged: this._sectionHeaderHasChanged,
      rowHasChanged: this._rowHasChanged,
    });

    this.state = {
      dataSource: dataSource
    }
  }

  componentDidMount() {
    // let listViewScrollView = this.refs.listView.getScrollResponder();
    // listViewScrollView.scrollTo(1); // Hack to get ListView to render fully
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.pokemon !== this.props.pokemon) {
      let {data, sectionIds} = this._getListViewData(nextProps.pokemon);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(data, sectionIds)
      })
    }
  } 
  
  _getListViewData(pokemon) {
    let data = {};
    let sectionIds = [];
    
    pokemon.map((p) => {
      let section = 'all'; //ignore sections for now
      if (sectionIds.indexOf(section) === -1) {
        sectionIds.push(section);
        data[section] = [];
      }
      data[section].push(p);
    });

    return {data, sectionIds};
  }
  
  _sectionHeaderHasChanged(oldSection, newSection) {
    return oldSection !== newSection;
  }

  _rowHasChanged(oldRow, newRow) {
    return oldRow !== newRow;
  }

  pokeMO(p, index) {
    return (
      <MediaObject 
        key={index} 
        rowId={index} 
        name={p.name} 
        imgUrl={getPokemonImageUrl(p)}>
      </MediaObject>
    );
  }

  _renderRow(rowData, sectionID, rowID) {
    console.log(rowData.name, rowID);
    return (
      this.pokeMO(rowData, rowID)
    );
  }

  _renderSectionHeader(data, sectionId) {
    // var text;
    return ( ''
      // <View style={styles.sectionHeader}>
      //   <Text style={styles.sectionHeaderText}>{sectionId}</Text>
      // </View>
    );
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    // var style = styles.rowSeparator;
    // if (adjacentRowHighlighted) {
    //     style = [style, styles.rowSeparatorHide];
    // }
    return (
      <View key={"SEP_" + sectionID + "_" + rowID}  style={styles.separator}/>
    );
  }


  // pokeMediaObjects(pokemonData) {
  //     console.log('pokemonData:', pokemonData);
  //     if (pokemonData.length <1 )
  //       return (<MediaObject name="No results to display"></MediaObject>)
  //     let pokeMOs = pokemonData.map(this.pokeMO);
      
  //     console.log('pokeMOs:', pokeMOs);
      
  //     return (
  //         pokeMOs
  //     );
  // };
  render() {
    // {pokeMediaObjects(this.props.pokemon)}
    return (
      <View style={styles.container}>
        <Header title="POKEDEX!">
        </Header>
        <View style={styles.body}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID, highlightRow) => (this._renderRow(rowData, sectionID, rowID))}
          />
            
        </View>
        <View style={styles.footer}>
            <SearchBar placeholder="Search..."
              onSearchTextChange={this.props.filter}>
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
  separator: {
    height: 5,
    alignSelf: 'stretch',
  },
  body: {
    flex: 1,
    // backgroundColor: '#33FFFF',
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
    pokemon: state.pokemon.get('all').toJS().filter((p) => {
      return ( state.pokemon.get('query') === '' 
        || p.name.indexOf(state.pokemon.get('query')) >= 0
      );
    }),
    query: state.pokemon.get('query'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filter: query => dispatch(actions.filter(query)),
  };
}
