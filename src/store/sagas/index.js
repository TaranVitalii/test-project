import createSagaMiddleware from 'redux-saga';
import {fork, all} from 'redux-saga/effects';

import album from './album';

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

function* root() {
  const watchers = [album].flat();
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);
