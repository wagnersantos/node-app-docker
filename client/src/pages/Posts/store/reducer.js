import { handleActions } from 'redux-actions';
import { types } from './actions';

export const initialState = {
  posts: [],
  searchPosts: [],
  loaders: {
    postsList: true,
  },
};

export default handleActions(
  {
    [types.UPDATE_LOADERS]: (state, { payload }) => ({
      ...state,
      loaders: { ...state.loaders, ...payload },
    }),
    [types.FETCH_POSTS.SUCCESS]: (state, { payload }) => ({
      ...state,
      posts: payload,
    }),
    [types.SEARCH_POSTS.SUCCESS]: (state, { payload }) => ({
      ...state,
      searchPosts: payload,
    }),
  },
  initialState,
);

export const selectors = {
  getLoaders: state => state.posts.loaders,
  getPosts: state => state.posts.posts,
  getSearchPosts: state => state.posts.searchPosts,
};
