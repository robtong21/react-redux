import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';
import {connect} from 'react-redux';

import {toggleSong} from '../action-creators/player';

// class ArtistContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return (
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children} />
//     );
//   }

// }
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    selectedArtist: state.artists.selected,
    children: ownProps.children,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song,list)),
  }
}

const ArtistContainer = connect(mapStateToProps, mapDispatchToProps)(Artist);

export default ArtistContainer;
