import get from 'lodash/get';
import { spawn, call, delay } from 'redux-saga/effects';

export const makeRestartable = saga =>
  function*() {
    yield spawn(function*() {
      while (true) {
        try {
          yield call(saga);
        } catch (error) {
          const status = get(error, 'response.status');

          if (status) {
            console.tron.log(`http error ${status}`);
          } else {
            console.tron.log(error);
          }
        }

        yield delay(1000);
      }
    });
  };
