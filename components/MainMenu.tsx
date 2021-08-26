import {
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline';
import React from 'react';
import MainMenuLink from './MainMenuLink';

const MainMenu = () => {
  return (
    <div className="">
      <div className="flex justify-evenly bg-white dark:bg-gray-900 w-full rounded-xl shadow p-4 ">
        <MainMenuLink text="Home" href="#" Icon={HomeIcon} />
        <MainMenuLink text="Search" href="#" Icon={SearchIcon} />
        <MainMenuLink text="Cart" href="#" Icon={ShoppingCartIcon} />
        <MainMenuLink text="Profile" href="#" Icon={UserIcon} />
      </div>
    </div>
  );
};

export default MainMenu;
