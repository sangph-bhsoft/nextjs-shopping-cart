import { fork } from 'redux-saga/effects';

function testSaga() {
  console.log('test saga');
}

export default function* watchTestSaga() {
  yield fork(testSaga);
}
