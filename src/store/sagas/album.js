import {takeLatest, call} from 'redux-saga/effects';
import {GET_ALBUM} from '../constants';
import {getAlbum} from '../../services';

import makeAsyncRequest from './makeAsyncRequest';

function* getAlbums() {
  const action = () => call(getAlbum);
  yield makeAsyncRequest(action, GET_ALBUM);
}

function* watchGetAlbums() {
  yield takeLatest(GET_ALBUM, getAlbums);
}

export default [watchGetAlbums];
