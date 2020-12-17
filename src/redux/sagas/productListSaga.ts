import { call, put, takeEvery, select } from 'redux-saga/effects';
import { fetchProductsSever } from '../../services/productService';
import { AppState } from '../../types/index';
import { PRODUCTS_LOAD, setErrorProducts, setProducts } from '../actions';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* fetchProducts() {
  yield delay(1000);
  try {
    const page: number = yield select((state: AppState) => state.productList.page);
    const products = yield call(fetchProductsSever, page);
    yield put(setProducts(products));
  } catch (error) {
    yield put(setErrorProducts('Sever Error'));
  }
}

export default function* watchTestSaga() {
  yield takeEvery(PRODUCTS_LOAD, fetchProducts);
}
