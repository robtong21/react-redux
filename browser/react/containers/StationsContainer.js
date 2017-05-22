import {connect} from 'react-redux'
import Stations from '../components/Stations'

const mapStateToProps = (state, ownProps) => {
  return {
    stations: convertSongsToStations(state.songs),
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

function convertSongsToStations (songs) {
  let stationsObj = {}
  songs.map(song => {
    if (!(song.genre in stationsObj)) {
      stationsObj[song.genre] = [song]
    } else {
      stationsObj[song.genre].push(song)
    }
  })
  return stationsObj
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)

export default StationsContainer
