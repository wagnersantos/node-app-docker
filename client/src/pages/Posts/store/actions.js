import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions,
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('posts', 'UPDATE_LOADERS'),
  FETCH_POSTS: createAsyncTypes('posts', 'FETCH_POSTS'),
  SET_POST: createAsyncTypes('posts', 'SET_POST'),
};

export const actions = {
  updateLoaders: createAction(types.UPDATE_LOADERS),
  fetchPosts: createAsyncActions(types.FETCH_POSTS),
  setPost: createAsyncActions(types.SET_POST),
};
