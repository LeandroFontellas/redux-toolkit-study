import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import cart from './cart/saga';

export function* rootSaga(): Generator<
  AllEffect<AllEffect<ForkEffect<never>>>,
  unknown,
  unknown
> {
  return yield all([cart]);
}
