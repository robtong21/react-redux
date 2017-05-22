import React from 'react';
import {connect} from 'react-redux';
import Songs from '../components/Songs'
import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state) => {
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song, list)),
  }
}



const SongsContainer = connect(mapStateToProps, mapDispatchToProps)(Songs);
export default SongsContainer;
