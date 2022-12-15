import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import CategoryWrapper from '@/components/category/categoryWrapper/CategoryWrapper';

/**
 * expect extend 먹힘
 *
 * @testing-library+jest-dom@5.16.5/node_modules/@testing-library/jest-dom/dist/matchers.js
 */
describe('렌더링', () => {
  test('should be renderd', async () => {
    render(
      <>
        <CategoryWrapper anchor="top">
          <div data-testid="category-list">example1</div>
        </CategoryWrapper>
      </>
    );

    const category = await screen.getByTestId<HTMLButtonElement>(
      'menu-open-btn'
    );

    userEvent.click(category);

    const categoryExample = await screen.getByText<HTMLDivElement>('example1');
    expect(categoryExample.innerHTML).toBe('example1');
  });
});
