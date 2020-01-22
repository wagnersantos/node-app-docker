import { call, put, all, takeLatest } from 'redux-saga/effects';

import Providers from 'core/providers';
import { actions, types } from './actions';
import { actions as actionsSnackbar } from 'components/Snackbar/store/actions';

const typePosts = 'posts';
const { showSnackbar } = actionsSnackbar;

export function* loadPosts() {
  try {
    yield put(actions.updateLoaders({ postsList: true }));
    const posts = yield call(Providers.service, {
      path: `/${typePosts}`,
    });

    yield put(actions.fetchPosts.receive(posts));
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.fetchPosts.error(message));
    console.tron.log('e ==>',error.toString());
  } finally {
    yield put(actions.updateLoaders({ postsList: false }));
  }
}

export function* setPost({ payload }) {
  try {
    yield call(Providers.service, {
      method: 'POST',
      path: `/${typePosts}`,
      params: payload,
    });

    yield put(actions.fetchPosts.request());
    yield put(showSnackbar('Post adicionado com sucesso'));
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.setPost.error(message));
    yield put(showSnackbar('Erro ao adicionar post'));
  } finally {
    yield put(actions.updateLoaders({ postsList: false }));
  }
}

export function* updatePost({ payload }) {
  try {
    yield call(Providers.service, {
      method: 'PUT',
      path: `/${typePosts}`,
      params: payload,
    });

    yield put(actions.fetchPosts.request());
    yield put(showSnackbar('Post atualizado com sucesso'));
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.updatePost.error(message));
    yield put(showSnackbar('Erro ao adicionar post'));
  } finally {
    yield put(actions.updateLoaders({ postsList: false }));
  }
}

export default function* root() {
  yield all([
    takeLatest(types.FETCH_POSTS.REQUEST, loadPosts),
    takeLatest(types.SET_POST.REQUEST, setPost),
    takeLatest(types.UPDATE_POST.REQUEST, updatePost),
  ]);
}
