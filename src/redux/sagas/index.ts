import { all } from 'redux-saga/effects';
import test from './testSaga';
import productList from './productListSaga';

export default function* rootSaga() {
  yield all([test(), productList()]);
}
