import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Common } from './index';

export default { component: Common } as Meta<typeof Common>;

export const DefaultFooter: StoryObj<typeof Common> = {
	args: {},
};
