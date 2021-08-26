/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import IconButton from './IconButton';
import { HeartIcon, PlusIcon } from '@heroicons/react/outline';

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
}

const BestsellersProduct = ({ id, name, price, image }: Props) => {
  return (
    <Link href={`/products/${id}`} passHref>
      <a>
        <div className="flex flex-col items-center pt-16" key={id}>
          <div className="flex flex-col items-center w-80 bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 pt-20 hover:shadow-lg transform transition-all duration-300 ease-out hover:-translate-y-1 relative">
            <div className="flex pt-2">
              <div className="w-40 space-y-2">
                <p className="font-bold text-sm text-gray-800 dark:text-gray-100">
                  {name}
                </p>
                <p className="font-bold text-[color:var(--primary)] text-xs">
                  ${price}
                </p>
              </div>
              <div className="space-x-2">
                <IconButton Icon={HeartIcon} />
                <IconButton Icon={PlusIcon} />
              </div>
            </div>
            <div className="w-36 absolute -top-16">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BestsellersProduct;
