import { RECEIVE_SONGS } from '../constants';
import {convertSong} from '../utils';
const initialSongsState = [];

export default function (state = initialSongsState, action) {
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs.map(convertSong);
    default:
      return state;
  }
}
