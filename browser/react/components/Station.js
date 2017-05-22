import React from 'react'
import Songs from './Songs'

const Station = (props) => {
  console.log("props in Station.js", props)
  const genreName = props.params.stationName
  return (
    <div>
    <h1>{genreName}</h1>
    <Songs {...props} />
    </div>
  )
}

export default Station
