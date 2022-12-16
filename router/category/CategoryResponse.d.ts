import { CollectionModel, EntityModel } from 'hateoas-hal-types';
import CategoryDomain from './CategoryDomain';

type CategoryRelationEntityModel = {
  _links: {
    update: HalLink;
    delete: HalLink;
  };
};

interface CategoryContent {
  category: EntityModel<CategoryDomain> & CategoryRelationEntityModel;
  children: CategoryContent[];
}

export type CategoryCollection = CollectionModel<CategoryContent>;
