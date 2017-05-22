import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux'

class PlayerContainer extends Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {

    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      // store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
      this.props.setProgress(AUDIO.currentTime / AUDIO.duration);
    });

    // this.unsubscribe = store.subscribe(() => {
    //   this.setState(store.getState().player);
    // });
  }

  toggle() {
    this.props.toggleSong(this.props.currentSong, this.props.currentSongList);
  }

  render() {
    return <Player
      currentSong={this.props.currentSong}
      currentSongList={this.props.currentSongList}
      isPlaying={this.props.isPlaying}
      progress={this.props.progress}
      next={this.props.next}
      prev={this.props.prev}
      toggle={this.toggle}
    />;
  }

}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    next: () => dispatch(next()),
    prev: () => dispatch(previous()),
    toggleSong: (song, list) => dispatch(toggleSong(song, list)),
    setProgress: (num) => dispatch(setProgress(num)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
