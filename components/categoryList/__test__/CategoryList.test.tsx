import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import CategoryList, { childCategoryType } from '../CategoryList';

describe('카테고리 항목', () => {
  beforeEach(() => {
    const grandChild: childCategoryType[] = Array(1, 2, 3).map((i) => ({
      href: 'https://example/' + i,
      name: 'grand child name is ' + i,
      deleteHref: '',
      updateHref: '',
    }));
    const child: childCategoryType[] = Array(4, 5, 6).map((i) => ({
      href: 'https://example/' + i,
      name: 'child name is ' + i,
      deleteHref: '',
      updateHref: '',
      child: grandChild,
    }));

    render(
      <>
        <CategoryList
          href=""
          name="root category"
          childCateogries={child}
          deleteHref={''}
          updateHref={''}
        />
        <CategoryList
          href=""
          name="root category2"
          deleteHref={''}
          updateHref={''}
        />
      </>
    );
  });

  test('카테고리 항목은 렌더링되어야한다. ', async () => {
    const category = await screen.findByText<HTMLSpanElement>('root category');
    expect(category.innerHTML).toEqual('root category');
  });

  test('카테고리 항목은 깊이에 따라 오른쪽으로 들여쓰기가 되어있어야한다. ', async () => {
    const rootCategory = await screen.findByText<HTMLSpanElement>(
      'root category'
    );
    userEvent.click(rootCategory);

    const categoryDeps1 = await screen.findByText<HTMLDivElement>(
      'child name is 4'
    );
    const categoryDeps2 = await screen.findByText<HTMLDivElement>(
      'child name is 5'
    );

    expect(categoryDeps1).not.toBeUndefined();
    expect(categoryDeps2).not.toBeUndefined();
  });

  test('카테고리 항목은 자식 elem이 존재할 수 있다', async () => {
    const rootCategory = await screen.findByText<HTMLSpanElement>(
      'root category'
    );
    userEvent.click(rootCategory);

    const categoryDeps1 = await screen.findByText<HTMLDivElement>(
      'child name is 4'
    );
    userEvent.click(categoryDeps1);

    const grandChildcategory1 = await screen.findByText<HTMLDivElement>(
      'grand child name is 1'
    );

    expect(grandChildcategory1).not.toBeUndefined();
  });

  test('자식 카테고리가 없으면 하위 카테고리가 열리지 않는다.', async () => {
    const rootCategory2 = (
      await screen.findAllByTestId<HTMLElement>('category-btn')
    )[1];

    userEvent.click(rootCategory2);

    expect(rootCategory2.nextElementSibling).toBeNull();
  });
});
