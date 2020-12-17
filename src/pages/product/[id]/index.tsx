import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { ProductDetail, ProductHeader } from '../../../components/product-detail';
import Loading from '../../../components/product/Loading';
import { addToCart, loadProductAsync } from '../../../redux/actions';
import { productAsyncSelector, productLoadAsyncSelector } from '../../../redux/selectors';
import { AppState, CartAdd, Product } from '../../../types';

const ProductDetailPage = () => {
  const { addToast } = useToasts();
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const product: Product = useSelector((state: AppState) => productAsyncSelector(state));
  const loading = useSelector((state: AppState) => productLoadAsyncSelector(state));
  useEffect(() => {
    dispatch(loadProductAsync(+id));
  }, [id, dispatch]);

  const addToCartAction = (item: CartAdd) => {
    dispatch(addToCart(item));
    addToast('Added to Cart', { appearance: 'success', autoDismiss: true });
  };

  if (loading) return <Loading />;
  return (
    <>
      <Head>
        <title>{product?.name}</title>
      </Head>
      <ProductHeader title={product?.name} />
      <ProductDetail product={product} addToCart={addToCartAction} />
    </>
  );
};

export default ProductDetailPage;
