import { combineReducers } from 'redux';

import posts from 'pages/Posts/store/reducer';

const reducers = () => combineReducers({ posts });

export default reducers;
