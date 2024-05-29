import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Common } from './index';
import { Coming_Soon } from 'next/font/google';

describe('Common component Test', () => {
	it('renders', () => {
		const testText = 'test for children';
		render(<Common>{testText}</Common>);

		const testTextDom = screen.getByText(testText);
		expect(testTextDom).toBeInTheDocument();

		//is GNB Rendering
		const gnb = screen.getByTestId('companyLogo');
		expect(gnb).toBeInTheDocument();

		//is Footer Rendering
		const footer = screen.getByTestId('copyright');
		expect(footer).toBeInTheDocument();
	});
});
