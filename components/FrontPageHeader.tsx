import { MenuIcon, BellIcon } from '@heroicons/react/outline';
import React from 'react';
import ThemeButton from './ThemeButton';

const FrontPageHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="bg-white dark:bg-gray-900 text-gray-600 rounded-lg p-2 transform transition-all duration-200 ease-in-out hover:text-gray-800 dark:text-gray-100 hover:shadow">
        <MenuIcon className="h-6" />
      </button>

      <ThemeButton />

      <button className="bg-transparent text-gray-600 rounded-lg p-2 transform transition-all duration-200 ease-in-out hover:bg-white dark:bg-gray-900 hover:text-gray-800 dark:text-gray-100 hover:shadow">
        <BellIcon className="h-6" />
      </button>
    </div>
  );
};

export default FrontPageHeader;
