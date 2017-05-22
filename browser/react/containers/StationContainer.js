import React from 'react'
import { connect } from 'react-redux'
import Station from '../components/Station'
import {toggleSong} from '../action-creators/player';

const filterGenre = (songs, genre) => {
  return songs.filter(song => song.genre === genre);
}


const mapStateToProps = (state, ownProps) => {
  console.log("s, p", state, ownProps)
  return ({
    stationName: ownProps.params.stationName,
    songs: filterGenre(state.songs, ownProps.params.stationName),
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({

  })
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station)

export default StationContainer
