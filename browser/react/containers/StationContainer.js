import React from 'react'
import { connect } from 'react-redux'
import Station from '../components/Station'

const mapStateToProps = (state, ownProps) => {
  return ({
    state, ownProps
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({

  })
}

const StationContainer = connect(mapStateToProps,mapDispatchToProps)(Station)

export default StationContainer
