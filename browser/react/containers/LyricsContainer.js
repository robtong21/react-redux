import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {connect} from 'react-redux';

import {searchLyrics} from '../action-creators/lyrics';

class LyricsContainer extends Component {

  constructor() {

    super();

    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  render() {
    return (
      <Lyrics
        {...this.state}
        text = {this.props.text}
        handleChange = {this.handleChange}
        setArtist = {this.handleArtistInput}
        setSong = {this.handleSongInput}
        handleSubmit = {this.handleSubmit} />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    text: state.lyrics.text,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LyricsContainer)
// export default LyricsContainer;

