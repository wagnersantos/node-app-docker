import {fork, all} from 'redux-saga/effects';
import {makeRestartable} from 'core/utils/saga';

const root = makeRestartable(function* run() {
  yield all([]);
});

export default root;
