import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from 'pages/Welcome';
import Posts from 'pages/Posts';
import PostRegister from 'pages/Posts/PostRegister';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Welcome,
    },
    Posts: {
      screen: Posts,
    },
    PostRegister: {
      screen: PostRegister,
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
