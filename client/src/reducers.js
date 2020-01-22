import { combineReducers } from 'redux';

import posts from 'pages/Posts/store/reducer';
import snackbars from 'components/Snackbar/store/reducer';
import theme from 'pages/Drawer/store/reducer';

const reducers = combineReducers({ posts, snackbars, theme });

export default reducers;
