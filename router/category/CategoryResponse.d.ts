import { CollectionModel, EntityModel } from 'hateoas-hal-types';
import CategoryDomain from './CategoryDomain';

interface CategoryContent {
  category: EntityModel<CategoryDomain>;
  children: CategoryContent[];
}

export type CategoryCollection = CollectionModel<CategoryContent>;
