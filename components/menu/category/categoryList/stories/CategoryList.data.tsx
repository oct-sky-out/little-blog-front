import { CategoryListProps } from '../CategoryList';

const grandChild: CategoryListProps[] = Array(1, 2).map((_) => ({
  href: '#',
  name: 'Grand Child',
  deleteHref: '',
  updateHref: '',
}));
const child: CategoryListProps[] = [
  {
    href: '#',
    name: 'Child',
    deleteHref: '',
    updateHref: '',
    child: grandChild,
  },
];
const root: CategoryListProps[] = Array(1)
  .fill(1)
  .map((i) => ({
    href: '#',
    name: 'Root',
    deleteHref: '',
    updateHref: '',
    child: child,
  }));

const ChildCategoryStroy: { Default: CategoryListProps[] } = {
  Default: [
    ...root,
    {
      deleteHref: '#',
      updateHref: '#',
      href: '#',
      name: 'Root',
    },
  ],
};

export { ChildCategoryStroy };
