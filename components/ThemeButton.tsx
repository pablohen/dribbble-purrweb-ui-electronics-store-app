import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className="bg-white dark:bg-gray-900 rounded-lg p-2 transform transition-all duration-200 ease-in-out  hover:shadow"
      onClick={changeTheme}
    >
      {theme === 'light' ? (
        <SunIcon className="h-6" />
      ) : (
        <MoonIcon className="h-6" />
      )}
    </button>
  );
};

export default ThemeButton;