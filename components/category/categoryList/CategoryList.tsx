import { ExpandLess, ExpandMore } from '@material-ui/icons';
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { v4 } from 'uuid';
import { useIsAdminSWR } from '../../hook/useIsAdminSWR';
import CategoryChild from '../categoryChild/CategoryChild';

export type childCategoryType = {
  child?: childCategoryType[];
  href: string;
  name: string;
  updateHref: string;
  deleteHref: string;
};

interface CategoryListProps {
  childCateogries?: childCategoryType[];
  deps?: number;
  href: string;
  name: string;
  updateHref: string;
  deleteHref: string;
}

const CategoryList = ({
  childCateogries,
  deps = 0,
  href,
  name,
}: CategoryListProps) => {
  const [childCategoryOpen, setChildCategoryOpen] = useState(false);
  const menuOpenClose = (state: boolean) => setChildCategoryOpen(state);

  //! 추후 리팩터링 필요 중복성이 매우 높음
  const { data } = useIsAdminSWR();
  const renderIsLoggedAdmin = () => {
    if (data?.authenticationLevel === 'ADMIN') {
      return (
        <>
          <div data-testid="admin-modify-btn">수정</div>
          <div>삭제</div>
        </>
      );
    }
  };

  const hasChildren = () => {
    if (childCateogries) {
      return childCategoryOpen ? <ExpandLess /> : <ExpandMore />;
    }
  };

  const childRender = useMemo(() => {
    if (!childCateogries) {
      return '';
    }

    return (
      <Collapse in={childCategoryOpen} timeout="auto" unmountOnExit>
        {childCateogries.map((category) => {
          const { child, href, name, updateHref, deleteHref } = category;
          if (!child) {
            return (
              <CategoryChild
                deps={deps! + 1}
                href={href}
                childName={name}
                key={v4()}
                updateHref={updateHref}
                deleteHref={deleteHref}
              />
            );
          }

          if (child) {
            return (
              <CategoryList
                key={v4()}
                childCateogries={child}
                href={href}
                deps={deps! + 1}
                name={name}
                updateHref={updateHref}
                deleteHref={deleteHref}
              ></CategoryList>
            );
          }
        })}
      </Collapse>
    );
  }, [childCateogries, childCategoryOpen]);

  return (
    <React.Fragment>
      <ListItem
        disablePadding
        onClick={() => menuOpenClose(!childCategoryOpen)}
        data-testid="category-btn"
      >
        <ListItemButton href={href} sx={{ px: deps }}>
          <ListItemText primary={name} />
          {hasChildren()}
        </ListItemButton>
      </ListItem>
      {renderIsLoggedAdmin()}
      {childRender}
    </React.Fragment>
  );
};

export default CategoryList;
