/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import Product from '../../interfaces/Product';
import products from '../../models/products';
import ProductHeader from './../../components/ProductHeader';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline';
import EmptyStar from '@heroicons/react/outline/StarIcon';
import FullStar from '@heroicons/react/solid/StarIcon';
import Rating from 'react-rating';
import { NextSeo } from 'next-seo';

interface Props {
  product: Product;
}

const ProductPage = ({ product }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-white p-4 space-y-4 relative z-0">
      {/* header */}
      <NextSeo title={product?.name ?? ''} />
      <ProductHeader />
      <div className="w-full aspect-w-1 aspect-h-1 rounded-full absolute -top-1/2 left-0 right-0 bg-[color:var(--primary-light)] z-[-98] md:hidden" />

      <div className="flex flex-col flex-grow space-y-4">
        {product && (
          <div className="flex flex-col md:flex-row md:space-x-4 px-4 space-y-4">
            <div className="w-full md:w-96">
              <div className="w-full flex justify-center">
                <img src={`/${product.image}`} alt={product.name} />
              </div>

              <div className="space-y-2 relative">
                <button className="bg-white shadow rounded-lg p-2 absolute top-0 right-0 transform transition-all duration-200 ease-in-out hover:shadow-lg">
                  <HeartIcon className="h-6" />
                </button>
                <p className="text-xl font-bold text-gray-800">
                  {product.name}
                </p>
                <div className="flex justify-between items-end">
                  <Rating
                    initialRating={3}
                    emptySymbol={<EmptyStar className="h-4" />}
                    fullSymbol={<FullStar className="h-4 text-yellow-400" />}
                  />
                  <p className="font-bold text-2xl text-[color:var(--primary)]">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full space-y-2">
              <p className="text-xl font-bold text-gray-800">About this item</p>
              <p className="text-sm text-gray-500">{product.about}</p>
            </div>
          </div>
        )}
      </div>

      <button className="flex items-center justify-center w-full bg-[color:var(--primary)] py-4 text-white font-bold rounded-xl transform transition-all duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
        <ShoppingCartIcon className="h-6 mr-2" />
        Add to cart
      </button>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          productId: '0',
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { productId } = context.params ?? {};
  const product: Product = products[Number(productId)];

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
