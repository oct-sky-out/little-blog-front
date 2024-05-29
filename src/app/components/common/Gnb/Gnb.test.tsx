import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Gnb } from '.';

describe('Gnb Test', () => {
	it('renders a Gnb', () => {
		render(<Gnb />);

		const companyLogo = screen.getByTestId('companyLogo');
		const introduce = screen.getByTestId('company-introduce');
		const inquiry = screen.getByTestId('inquiry');

		[companyLogo, introduce, inquiry].forEach((elem) =>
			expect(elem).toBeInTheDocument()
		);
	});
});
