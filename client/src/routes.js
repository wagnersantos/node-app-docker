import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from 'pages/Welcome';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Welcome,
  },
});

export default createAppContainer(AppNavigator);
