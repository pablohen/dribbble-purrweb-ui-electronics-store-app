import { ArrowSmLeftIcon, ShareIcon } from '@heroicons/react/outline';
import React from 'react';
import Link from 'next/link';

const ProductHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" passHref>
        <a className="bg-white rounded-lg p-2 transform transition-all duration-200 ease-in-out hover:shadow">
          <ArrowSmLeftIcon className="h-6" />
        </a>
      </Link>

      <button className="bg-white rounded-lg p-2 transform transition-all duration-200 ease-in-out  hover:shadow">
        <ShareIcon className="h-6" />
      </button>
    </div>
  );
};

export default ProductHeader;
