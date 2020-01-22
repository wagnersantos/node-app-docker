import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Drawer from 'pages/Drawer';
import Search from 'pages/Search';
import Posts from 'pages/Posts';
import PostRegister from 'pages/Posts/PostRegister';

const AppDrawerNavigator = createDrawerNavigator(
  {
    Posts: {
      screen: Posts,
    },
    PostRegister: {
      screen: PostRegister,
    },
    Search: {
      screen: Search,
    },
  },
  {
    contentComponent: Drawer,
    initialRouteName: 'Posts',
    drawerLockMode: 'locked-closed',
    useNativeAnimations: false,
  },
);

const AppNavigator = createStackNavigator(
  {
    Drawer: {
      screen: AppDrawerNavigator,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNavigator);
