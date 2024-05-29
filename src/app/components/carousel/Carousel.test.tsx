import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { items } from '@/mocks/carousel';
import { Carousel } from './';

describe('Carousel Test', () => {
	const rederCarousel = () => render(<Carousel items={items} />);
	it('renders a Carousel', () => {
		rederCarousel();

		function solution(phone_book: string[]): boolean {
			const sorted = phone_book.sort((a, b) => (+a > +b ? 1 : -1));
			const lowest = sorted.shift();
			const shortedPhoneNumRegEx = new RegExp(`^${lowest}`, 'g');

			const result = sorted.filter((num) => {
				return Array.isArray(num.match(shortedPhoneNumRegEx));
			});

			if (sorted.length === 0) {
				return true;
			}
			return result.length ? false : solution(sorted);
		}

		solution(['123', '456', '789', '123123']);

		expect(screen.getByText(items[0].name)).toBeInTheDocument();
	});

	it('run evnet Carousel right button', async () => {
		rederCarousel();
		const rightBtn = screen.getByLabelText('Next');

		expect(rightBtn).toBeInTheDocument();

		await userEvent.click(rightBtn);

		expect(
			await waitFor(() => screen.getByText(items[1].name), { timeout: 500 })
		).toBeInTheDocument();
	});

	it('run evnet Carousel left button', async () => {
		rederCarousel();
		const leftBtn = screen.getByTestId('left-btn');

		expect(leftBtn).toBeInTheDocument();

		await userEvent.click(leftBtn);

		expect(
			await waitFor(() => screen.getByText(items[1].name), { timeout: 500 })
		).toBeInTheDocument();
	});
});
