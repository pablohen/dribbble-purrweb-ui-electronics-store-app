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
          <div className="flex flex-col items-center w-80 bg-white rounded-xl shadow-lg p-4 pt-20 relative">
            <div className="flex">
              <div className="w-40 space-y-2">
                <p className="font-bold text-sm text-gray-800">{name}</p>
                <p className="font-bold text-[color:var(--primary)] text-xs">
                  ${price}
                </p>
              </div>
              <div className="space-x-2">
                <IconButton Icon={HeartIcon} />
                <IconButton Icon={PlusIcon} />
              </div>
            </div>
            <div className="w-40 absolute -top-12">
              <img className="" src={image} alt={name} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BestsellersProduct;
