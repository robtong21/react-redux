import React from 'react';
import Songs from './Songs';
import AddSongContainer from '../containers/AddSongContainer';
import SongsContainer from '../containers/SongsContainer';

export default function Playlist (props) {

  const playlist = props.selectedPlaylist;

  return (
    <div>
      <h3>{ playlist.name }</h3>
      <SongsContainer {...props} songs={playlist.songs}/>
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
      <AddSongContainer />
      <hr />
    </div>
  );

}

