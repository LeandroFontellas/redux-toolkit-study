import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  addProductToCartSuccessAction,
  addProductToCartFailureAction,
} from './actions';
import { ICartState, IProduct } from './types';

const initialState: ICartState = {
  items: [],
  failedStockCheck: [],
};

const reducer = createReducer(initialState, builder =>
  builder
    .addCase(
      addProductToCartSuccessAction,
      (state, action: PayloadAction<IProduct>) => {
        const { id, price, title } = action.payload;

        const productInCartIndex = state.items.findIndex(
          item => item.product.id === id,
        );

        if (productInCartIndex >= 0) {
          // eslint-disable-next-line no-param-reassign
          state.items[productInCartIndex].quantity += 1;
        } else {
          state.items.push({
            product: { id, price, title },
            quantity: 1,
          });
        }
      },
    )
    .addCase(
      addProductToCartFailureAction,
      (state, action: PayloadAction<number>) => {
        state.failedStockCheck.push(action.payload);
      },
    ),
);

export default reducer;
