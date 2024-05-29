import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, waitFor } from '@storybook/test';

import { Carousel, ItemType } from './';
import { items } from '@/mocks/carousel';

export default { component: Carousel } as Meta<typeof Carousel>;

export const DefaultFooter: StoryObj<typeof Carousel> = {
	args: { items },
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const indicator2 = canvas.getByLabelText('carousel indicator 2');

		expect(indicator2).toBeInTheDocument();

		// await userEvent.hover();
		await userEvent.click(indicator2);

		expect(
			await waitFor(() => canvas.getByText('Random Name #2'), { timeout: 1000 })
		).toBeInTheDocument();
	},
};
