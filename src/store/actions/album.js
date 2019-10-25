import {GET_ALBUM} from '../constants';

//Get an album without payload because it receives a request. But if we have a token
// it show like export function getAlbum(token) {
//   return {
//     type: GET_ALBUM,
//     payload:token,
//   };
// }

export function getAlbum() {
  return {
    type: GET_ALBUM,
  };
}
