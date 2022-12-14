import React from 'react';
import { useIsAdminSWR } from '../hook/useIsAdminSWR';

interface CategoryListProps {
  children: React.ReactNode;
  deps: number;
}

const CategoryList = ({ children, deps }: CategoryListProps) => {
  const applyIndent = `pl-[${deps * 12}px]`;
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
      <div className={applyIndent}>
        {children}
        {renderIsLoggedAdmin()}
      </div>
    </React.Fragment>
  );
};

export default CategoryList;
