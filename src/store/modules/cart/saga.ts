import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { RootState } from '../..';
import api from '../../../services/api';
import {
  addProductToCartRequestAction,
  addProductToCartSuccessAction,
  addProductToCartFailureAction,
} from './actions';
import { ActionTypes, IStock } from './types';

type CheckProductStockRequest = ReturnType<
  typeof addProductToCartRequestAction
>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const product = payload;

  const currentQuantity: number = yield select(
    (state): RootState =>
      state.cart.items.find(
        (item: { product: { id: number } }) => item.product.id === product.id,
      )?.quantity ?? 0,
  );

  const availableStockResponse: AxiosResponse<IStock> = yield call(
    api.get,
    `stock/${product.id}`,
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccessAction(product));
  } else {
    yield put(addProductToCartFailureAction(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
