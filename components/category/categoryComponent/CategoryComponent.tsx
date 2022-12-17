import {
  CategoryCollection,
  CategoryHal,
} from '@/router/category/CategoryResponse';
import React from 'react';
import { v4 } from 'uuid';
import CategoryList, { CategoryListProps } from '../categoryList/CategoryList';
import CategoryWrapper from '../categoryWrapper/CategoryWrapper';

interface CategoryComponentProps {
  categoryEntities?: CategoryCollection;
}

const categoryComponent = ({ categoryEntities }: CategoryComponentProps) => {
  const categoryEntitiesToCategoryListProps = () => {
    if (categoryEntities === undefined) {
      return [
        {
          href: '',
          name: '카테고리가 비어있습니다.',
          updateHref: '',
          deleteHref: '',
        },
      ];
    }
    return categoryEntities._embedded.halCategoriesList.map((category) =>
      parseCategoryListProps(category)
    );
  };

  const parseCategoryListProps: (
    categoryEntity: CategoryHal
  ) => CategoryListProps = (categoryEntity: CategoryHal) => {
    const { name, _links } = categoryEntity.category;
    const categoryProp: CategoryListProps = {
      href: '',
      name,
      updateHref: _links.update.href,
      deleteHref: _links.delete.href,
    };

    if (categoryEntity.children !== null) {
      categoryProp.child = categoryEntity.children.map((children) =>
        parseCategoryListProps(children)
      );
    }

    return categoryProp;
  };

  const drawCategories = (categoriesPropsFn: () => CategoryListProps[]) =>
    categoriesPropsFn().map((category) => {
      const { deleteHref, href, name, updateHref, child } = category;
      return (
        <React.Fragment key={v4()}>
          <CategoryList
            deleteHref={deleteHref}
            href={href}
            name={name}
            updateHref={updateHref}
            child={child}
          ></CategoryList>
        </React.Fragment>
      );
    });

  return (
    <React.Fragment>
      <CategoryWrapper anchor="top">
        {drawCategories(categoryEntitiesToCategoryListProps)}
      </CategoryWrapper>
    </React.Fragment>
  );
};

export default categoryComponent;
