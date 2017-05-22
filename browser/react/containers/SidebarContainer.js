import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists.list,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
