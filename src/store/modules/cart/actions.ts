import { createAction } from '@reduxjs/toolkit';
import { IProduct } from './types';

export const addProductToCartRequestAction = createAction<
  IProduct,
  'addProductToCartRequest'
>('addProductToCartRequest');

export const addProductToCartSuccessAction = createAction<
  IProduct,
  'addProductToCartSuccess'
>('addProductToCartSuccess');

export const addProductToCartFailureAction = createAction<
  number,
  'addProductToCartFailure'
>('addProductToCartFailure');
