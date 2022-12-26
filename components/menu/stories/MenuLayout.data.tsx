import { MenuLayoutProps } from '../MenuLayout';

export const MenuDataStory: {
  Default: MenuLayoutProps[];
} = {
  Default: [
    {
      categoryEntities: {
        _links: { self: { href: '' } },
        _embedded: {
          halCategoriesList: [
            {
              category: {
                _links: { delete: { href: '' }, update: { href: '' } },
                id: '',
                baseField: {
                  createdAt: '2020-10-10T10:10:10',
                  isDeleted: 0,
                  updatedAt: null,
                  version: 1,
                },
                name: 'Empty Category',
                parentId: null,
              },
              children: null,
            },
          ],
        },
      },
    },
  ],
};
