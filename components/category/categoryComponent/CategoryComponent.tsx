import { CategoryContent } from '@/router/category/CategoryResponse';
import { EntityModel } from 'hateoas-hal-types';
import React from 'react';
import { v4 } from 'uuid';
import CategoryList, { CategoryListProps } from '../categoryList/CategoryList';
import CategoryWrapper from '../categoryWrapper/CategoryWrapper';

interface CategoryComponentProps {
  categoryEntities: EntityModel<CategoryContent>[];
}

const categoryComponent = ({ categoryEntities }: CategoryComponentProps) => {
  const categoryEntitiesToCategoryListProps = () =>
    categoryEntities.map((entity) => parseCategoryListProps(entity));

  const parseCategoryListProps: (
    categoryEntity: CategoryContent
  ) => CategoryListProps = (categoryEntity: CategoryContent) => {
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
