import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { addProductToCartRequestAction } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps{
  product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const hasFailedStockCheck = useAppSelector(
    (state) => state.cart.failedStockCheck.includes(product.id),
  );

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequestAction(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong>
      {' - '}
      <span>{product.price}</span>
      {'  '}
      <button type="button" onClick={handleAddProductToCart}>Comprar</button>
      {hasFailedStockCheck && <span style={{ color: 'red' }}>falta de estoque</span>}
    </article>
  );
};

export { CatalogItem };
