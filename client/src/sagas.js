import { fork, all } from 'redux-saga/effects';

import { makeRestartable } from 'core/utils/saga';
import PostsSaga from 'pages/Posts/store/saga';
import ThemeSaga from 'pages/Drawer/store/saga';

const root = makeRestartable(function* run() {
  yield all([fork(PostsSaga), fork(ThemeSaga)]);
});

export default root;
