import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { useIsAdminSWR } from '../hook/useIsAdminSWR';

interface CategoryChildProps {
  deps: number;
  childName: string;
  href: string;
  updateHref: string;
  deleteHref: string;
}

const CategoryChild = ({
  deps,
  childName,
  href,
  updateHref,
  deleteHref,
}: CategoryChildProps) => {
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

  return (
    <React.Fragment>
      <ListItemButton href={href} sx={{ px: deps }}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary={childName} />
      </ListItemButton>
      <div>{renderIsLoggedAdmin()}</div>
    </React.Fragment>
  );
};

export default CategoryChild;
