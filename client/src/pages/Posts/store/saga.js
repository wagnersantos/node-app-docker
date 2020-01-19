import { call, put, takeEvery, all } from 'redux-saga/effects';
import Providers from 'core/providers';
import { actions, types } from './actions';

const typePosts = 'items';

export function* loadCustomers() {
  try {
    yield put(actions.updateLoaders({ customersList: true }));
    const posts = yield call(Providers.service, {
      path: `/${typePosts}`,
    });
    yield put(actions.fetchPosts.receive(posts));
  } catch (error) {
    const { message } = error.response.data;
    yield put(actions.fetchPosts.error(message));
  } finally {
    yield put(actions.updateLoaders({ customersList: false }));
  }
}

export default function* root() {
  yield all([takeEvery(types.FETCH_POSTS.REQUEST, loadCustomers)]);
}
