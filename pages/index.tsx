/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import products from '../models/products';
import categories from '../models/categories';
import MainMenu from '../components/MainMenu';
import Bestsellers from '../components/Bestsellers';
import Categories from '../components/Categories';
import FrontPageHeader from '../components/FrontPageHeader';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[color:var(--primary-lighter)] dark:bg-black p-4 space-y-4">
      {/* header */}
      <FrontPageHeader />

      <div className="flex flex-col flex-grow space-y-4">
        {/* bestseller */}
        <Bestsellers products={products} />

        {/* categories */}
        <Categories categories={categories} />
      </div>

      {/* menu */}
      <MainMenu />
    </div>
  );
};

export default Home;
