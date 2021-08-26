import React from 'react';

interface Props {
  Icon: any;
}

const IconButton = ({ Icon }: Props) => {
  return (
    <button className="bg-white dark:bg-gray-900 text-gray-600 shadow rounded-lg p-2 transform transition-all duration-200 ease-in-out hover:text-gray-800 dark:text-gray-100 hover:shadow-lg">
      <Icon className="h-6" />
    </button>
  );
};

export default IconButton;
