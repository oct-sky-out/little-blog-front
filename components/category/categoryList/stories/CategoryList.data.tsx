import { childCategoryType } from '../CategoryList';

const grandChild: childCategoryType[] = Array(1, 2).map((_) => ({
  href: '#',
  name: 'Grand Child',
  deleteHref: '',
  updateHref: '',
}));
const child: childCategoryType[] = [
  {
    href: '#',
    name: 'Child',
    deleteHref: '',
    updateHref: '',
    child: grandChild,
  },
];
const root: childCategoryType[] = Array(1)
  .fill(1)
  .map((i) => ({
    href: '#',
    name: 'Root',
    deleteHref: '',
    updateHref: '',
    child: child,
  }));

const ChildCategoryStroy: { Default: childCategoryType[] } = {
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
