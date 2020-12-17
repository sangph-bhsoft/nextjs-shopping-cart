import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProductByIdSever } from '../../services/productService';
import { loadProductAsync, PRODUCT_LOAD, setErrorProductAsync, setProductAsync } from '../actions';

function* fetchProduct({ payload: id }: ReturnType<typeof loadProductAsync>) {
  try {
    const products = yield call(fetchProductByIdSever, id);
    yield put(setProductAsync(products));
  } catch (error) {
    yield put(setErrorProductAsync('Sever Error'));
  }
}

export default function* watchTestSaga() {
  yield takeEvery(PRODUCT_LOAD, fetchProduct);
}
