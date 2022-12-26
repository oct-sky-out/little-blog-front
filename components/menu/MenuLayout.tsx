import { CategoryCollection } from '@/router/category/CategoryResponse';
import React from 'react';
import CategoryComponent from './category/categoryComponent/CategoryComponent';

export type MenuLayoutProps = {
  children?: React.ReactNode;
  categoryEntities: CategoryCollection;
};

const MenuLayout = ({ categoryEntities, children }: MenuLayoutProps) => {
  return (
    <div className="xl:w-4/5 xl:mx-auto xl:xl:my-0 pt-2">
      <CategoryComponent categoryEntities={categoryEntities} />
      {children}
    </div>
  );
};

export default MenuLayout;
