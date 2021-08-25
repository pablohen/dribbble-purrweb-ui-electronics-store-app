import { ArrowSmRightIcon } from '@heroicons/react/outline';
import React from 'react';
import Product from '../interfaces/Product';
import BestsellersProduct from './BestsellersProduct';

interface Props {
  products: Product[];
}

const Bestsellers = ({ products }: Props) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-gray-500">Bestsellers</p>
        <ArrowSmRightIcon className="text-gray-500 h-6" />
      </div>

      <div className="flex space-x-4 overflow-x-auto -m-4 p-4">
        {products.map((product) => (
          <BestsellersProduct
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
