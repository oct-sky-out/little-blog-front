import { Meta, StoryObj } from '@storybook/react';

import { Footer } from './index';

export default { component: Footer } as Meta<typeof Footer>;

export const DefaultFooter: StoryObj<typeof Footer> = {
	args: {},
};
