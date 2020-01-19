import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions,
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('posts', 'UPDATE_LOADERS'),
  FETCH_POSTS: createAsyncTypes('posts', 'FETCH_POSTS'),
};

export const actions = {
  updateLoaders: createAction(types.UPDATE_LOADERS),
  fetchPosts: createAsyncActions(types.FETCH_POSTS),
};
