import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './';

describe('Footer Test', () => {
	it('renders a footer', () => {
		render(<Footer />);

		const copyrightText = screen.getByTestId('copyright');

		expect(copyrightText).toBeInTheDocument();
	});
});
