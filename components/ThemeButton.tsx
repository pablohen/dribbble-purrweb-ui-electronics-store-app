import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const changeTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (loading) return null;

  return (
    <button
      className="bg-white dark:bg-gray-900 rounded-lg p-2 transform transition-all duration-200 ease-in-out  hover:shadow"
      onClick={changeTheme}
    >
      {resolvedTheme === 'light' ? (
        <SunIcon className="h-6" />
      ) : (
        <MoonIcon className="h-6" />
      )}
    </button>
  );
};

export default ThemeButton;
