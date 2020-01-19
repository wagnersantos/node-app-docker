import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from 'pages/Welcome';
import Posts from 'pages/Posts';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Welcome,
    },
    Posts: {
      screen: Posts,
    },
  },
  {
    initialRouteName: 'Posts',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNavigator);
