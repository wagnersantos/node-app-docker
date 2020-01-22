import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import { isIos, IP } from 'environment';

if (__DEV__) {
  const host = isIos ? '' : { host: IP };
  const tron = Reactotron.configure(host)
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  // eslint-disable-next-line
  console.tron = tron;
}
