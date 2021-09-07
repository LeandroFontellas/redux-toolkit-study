// eslint-disable-next-line no-shadow
export enum ActionTypes {
  addProductToCartRequest = 'addProductToCartRequest',
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface IStock {
  id: number;
  quantity: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}

export interface addProductToCartReturn {
  type: string;
  payload: {
    product: IProduct;
  };
}

export interface addProductToCartReturnFailure {
  type: string;
  payload: {
    productId: number;
  };
}
