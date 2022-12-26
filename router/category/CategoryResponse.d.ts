import { HalResource, HalLink } from 'hal-types';
import CategoryDomain from './CategoryDomain';

export type CategoryHal = {
  category: CategoryDomain & {
    _links: {
      update: HalLink;
      delete: HalLink;
    };
  };
  children: CategoryHal[] | null;
};

export type CategoryCollection = HalResource & {
  _embedded?: {
    halCategoriesList: CategoryHal[];
  };
};
