import React from 'react';

interface Props {
  Icon: any;
}

const IconButton = ({ Icon }: Props) => {
  return (
    <button className="bg-white text-gray-600 shadow rounded-lg p-2 transform transition-all duration-200 ease-in-out hover:text-gray-800 hover:shadow-lg">
      <Icon className="h-6" />
    </button>
  );
};

export default IconButton;
