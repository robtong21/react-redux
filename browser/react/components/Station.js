import React from 'react'
import Songs from './Songs'
import SongsContainer from '../containers/SongsContainer'

const Station = (props) => {
  console.log("props in Station.js", props)
  const genreName = props.stationName
  return (
    <div>
      <h1>{genreName}</h1>
      <SongsContainer
        stationName={props.stationName}
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}
      />
    </div>
  )
}

export default Station
