import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import CategoryList from '../CategoryList';

describe('카테고리 항목', () => {
  beforeEach(() => {
    render(
      <>
        <CategoryList deps={0}>
          example
          <CategoryList deps={1}>
            example1
            <CategoryList deps={2}>example2</CategoryList>
          </CategoryList>
        </CategoryList>
      </>
    );
  });

  test('카테고리 항목은 렌더링되어야한다. ', async () => {
    const category = await screen.findByText<HTMLDivElement>('example');
    expect(category.innerHTML.match('example')).toBeTruthy();
  });

  test('카테고리 항목은 깊이에 따라 오른쪽으로 들여쓰기가 되어있어야한다. ', async () => {
    const categoryDeps1 = await screen.findByText<HTMLDivElement>('example1');
    const categoryDeps2 = await screen.findByText<HTMLDivElement>('example2');
    expect(categoryDeps1.classList.contains('pl-[12px]')).toEqual(true);
    expect(categoryDeps2.classList.contains('pl-[24px]')).toEqual(true);
  });

  test('카테고리 항목은 자식 elem이 존재할 수 있다', async () => {
    const category = await screen.findByText<HTMLDivElement>('example');
    const category1 = await screen.findByText<HTMLDivElement>('example1');
    const category2 = await screen.findByText<HTMLDivElement>('example2');

    expect(category.childNodes[1]).toEqual(category1);
    expect(category1.childNodes[1]).toEqual(category2);
  });

  fail(
    '카테고리 항목은 운영자의 권한으로 로그인이 되었을 경우, 수정, 삭제가 가능하다. '
  );
});
