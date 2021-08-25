import { MenuIcon, BellIcon } from '@heroicons/react/outline';
import React from 'react';

const FrontPageHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="bg-white text-gray-600 rounded-lg p-2 transform transition-all duration-200 ease-in-out hover:text-gray-800 hover:shadow">
        <MenuIcon className="h-6" />
      </button>

      <button className="bg-transparent text-gray-600 rounded-lg p-2 transform transition-all duration-200 ease-in-out hover:bg-white hover:text-gray-800 hover:shadow">
        <BellIcon className="h-6" />
      </button>
    </div>
  );
};

export default FrontPageHeader;
