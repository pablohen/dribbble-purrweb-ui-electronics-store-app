import { ArrowSmRightIcon } from '@heroicons/react/outline';
import React from 'react';
import Category from '../interfaces/Category';
import Link from 'next/link';

interface Props {
  categories: Category[];
}

const Categories = ({ categories }: Props) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-gray-500">Categories</p>
        <ArrowSmRightIcon className="text-gray-500 h-6" />
      </div>

      <div className="flex space-x-4 overflow-x-auto -m-4 p-4">
        {categories.map((category) => (
          <Link href="#" passHref key={category.id}>
            <a className="bg-white border rounded-full text-gray-400 px-4 py-2 hover:text-gray-800 hover:shadow transform transition-all duration-300 ease-in-out">
              {category.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
